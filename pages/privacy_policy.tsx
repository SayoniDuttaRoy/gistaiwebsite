import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
          <Head>
            <title>Privacy Policy - Gist AI</title>
            <meta name="title" content="Privacy Policy for Gist AI" />
            <meta name="description" content="Privacy Policy for Gist AI - One extension to summarize everything. Website. YouTube video. Online PDF. Offline PDF." />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="icon" href='/favicon.png' />
          </Head>
          
          <main className="font-bodyFont overflow-x-hidden overflow-y-scroll px-5">
            <section id="home" className="max-w-contentContainer mx-auto flex flex-col gap-4 mt-10">
                <h1 className="text-2xl font-semibold">Privacy Policy</h1>
                <p className="text-xl font-semibold">Gist AI Extension privacy policy - Common Information</p>
                <p>
                    This privacy policy describes how we treat personal information and data when you use the Gist AI Extension.
                    <br/>In this privacy policy, we describe what kind of data we may collect of you in connection with your use of our services and how we may use such data. Below we call these collectively Services. By using our Services, you agree to the processing of your data in accordance with this privacy policy.
                    <br/>We may amend this privacy policy from time to time by posting a new version online so please review it frequently. Your continued use of our Services after the posting of a new version is deemed as your acceptance of the modified terms.
                </p>
                <p className="text-xl font-semibold">Personal Information</p>
                <p>
                    The Extension does not collect any personal identifiable information about you (such as your name, email address, etc.). Further, it does not collect or report back to us (or anyone else) any data regarding your computer keystrokes or other data unrelated to the services the Extension provides.
                    <br/>We do not call Google APIs to obtain personal information. Moreover, when installing a Gist AI Extension on a personal Google account we are provided with no information regarding who has completed the installation.
                </p>
                <p className="text-xl font-semibold">Cookies</p>
                <p>We do not send or collect any cookies.</p>
                <p className="text-xl font-semibold">Analytics Data</p>
                <p>We use Google analytics because it tells us how many users we have and what they use more. You would be advised to refer to the privacy policy of Google to see what they do with the hits they receive from you to their domains.</p>
                <p className="text-xl font-semibold">Security</p>
                <p>We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store data.</p>
                <p className="text-xl font-semibold">Contact</p>
                <p>For any additional information please contact us at belanik.official@gmail.com.</p>
            </section>
          </main>
        </>
      );
}