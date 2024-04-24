// RESEND EMAIL TEMPLATE https://resend.com/docs/send-with-nextjs
export const EmailTemplate = (data: any) => {
  // Map through the data and create a list of the form data
  const emailData = Object.keys(data).map(key => {
      return <li key={key}>{key}: {data[key]}</li>;
  });

  // Return the email template
  return (
      <div>
          <h1>Form Submission</h1>
          <ul>
              {emailData}
          </ul>
      </div>
  );
}