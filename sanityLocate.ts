import { DocumentLocationResolver } from 'sanity/presentation';
import { map } from 'rxjs';

export const locate: DocumentLocationResolver = (params, context) => {
    if (params.type === 'post') {
        const doc$ = context.documentStore.listenQuery(
            `*[_id == $id][0]{slug}`, 
            params,
            { perspective: "previewDrafts" }
        );

        return doc$.pipe(
            map((doc) => {
                if (!doc || !doc.slug?.current) {
                    console.log('No document or slug found');
                    return null;
                }

                const locationUrl = `/blog/${doc.slug.current}`;

                return {
                    locations: [
                        {
                            title: doc.title || 'Untitled Post',
                            href: locationUrl,
                        },
                        {
                            title: "Posts",
                            href: "/",
                        }
                    ],
                };
            })
        );
    }

    return null;
};
