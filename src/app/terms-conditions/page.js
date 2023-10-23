import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='px-5 lg:px-0'>
            <h1 className='font-serif font-bold text-xl lg:text-3xl py-5'> Terms and Conditions</h1>

            <p className='font-italian text-xl lg:text-3xl py-5 text-justify'>{`Welcome to LeurLux.com operated by LeurLux LCD. By using our website and services, you agree to comply with and be bound by the following terms and conditions. "Terms" Please read these Terms carefully before using our website and services. If you do not agree with these Terms, please do not use our website.`}</p>
            <ul className=' text-xl flex flex-col gap-5 py-5 '>
                <li>1. Acceptance of Terms
                    By using our website and services, you accept and agree to these Terms and any additional terms and policies referenced herein. If you do not agree to these Terms, please refrain from using our website and services.</li>
                <li>
                    2. Eligibility
                    You must be at least 18 years old to use our website and services. By using our website, you represent and warrant that you are 18 years of age or older.
                </li>
                <li>
                    3. Privacy Policy
                    Your use of our website and services is also governed by our Privacy Policy, which can be found at <Link href="privacy-policy" className='text-blue-500 font-bold'>Privacy Policy</Link>. By using our website, you agree to our data practices as described in our Privacy Policy.

                </li>
                <li>
                    4. Services and Membership

                    LeurLux offers various membership tiers, each with its own features and pricing. Details of these memberships can be found on our website. We reserve the right to modify our services and membership offerings at any time.

                </li>
                <li>
                    5. User Content
                    By using our website and services, you may submit content, including but not limited to reviews, comments, and other materials. You retain ownership of your content, but you grant LeurLux a non-exclusive, worldwide, royalty-free, transferable, sub-licensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display your content in any media.s
                </li>
                <li>
                    6. Termination
                    We reserve the right to terminate or suspend your access to our website and services at our discretion, with or without cause, and with or without notice.
                </li>
                <li>

                    {` 7. Disclaimers
                    - We provide our services "as is" and do not guarantee that they will always be error-free or uninterrupted.
                    - LeurLux is not responsible for the actions of third parties you may interact with through our services.
                    - We are not responsible for the quality, safety, or legality of any services provided by third-party partners or affiliates.
                    - You use our services at your own risk.`}
                </li>
                <li>
                    8. Limitation of Liability
                    In no event shall LeurLux be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.

                </li>
                <li>
                    9. Governing Law

                    These Terms are governed by and construed in accordance with the laws of [ Portugal Jurisdiction]. You agree that any legal action or proceeding between you and LeurLux shall be brought exclusively in the state or federal courts located within [Portugal Jurisdiction].
                </li>
                <li>
                    10. Contact Us
                    If you have any questions or concerns about these Terms, please contact us at <Link className='text-blue-500' href={"mailto:info@leurlux.com"}>[info@leurlux.com]</Link>.
                </li>
            </ul>















        </div>
    );
};

export default page;