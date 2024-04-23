import { MdDescription, MdCategory, MdPerson, MdPages, MdLocalOffer } from 'react-icons/md'; // Import icons
import { MdDynamicFeed } from "react-icons/md";

// Desk structure for Sanity Studio

export const sanityDeskStructure = (S:any) =>
    S.list()
        .title('Content')
        .items([
            // Pages
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .icon(MdPages) // Pages icon
                .child(S.documentTypeList('page').title('Pages')),

            // Services
            S.listItem()
                .title('Services')
                .schemaType('service')
                .icon(MdLocalOffer) // Services icon
                .child(S.documentTypeList('service').title('Services')),

            // Blog
            S.listItem()
                .title('Blog')
                .icon(MdDynamicFeed) // Blog icon
                .child(
                    S.list()
                        .title('Content')
                        .items([
                            // Posts
                            S.listItem()
                                .title('Posts')
                                .schemaType('post')
                                .icon(MdDescription) // Posts icon
                                .child(S.documentTypeList('post').title('Posts')),
                            
                            // Categories
                            S.listItem()
                                .title('Categories')
                                .schemaType('category')
                                .icon(MdCategory) // Categories icon
                                .child(S.documentTypeList('category').title('Categories')),

                            // Authors
                            S.listItem()
                                .title('Authors')
                                .schemaType('author')
                                .icon(MdPerson) // Authors icon
                                .child(S.documentTypeList('author').title('Authors')),
                        ])
                ),

        ]);
