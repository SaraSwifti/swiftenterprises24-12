import Image from 'next/image';
import logo from '@/assets/images/swift-logo.png';
const PrivacyPolicyPage = () => {
    return (  
        <>
        <div className="container p-5" >
          <div>
                    <h1 className='font-bold text-center text-bold'>Swift Enterprises’ Privacy Policy </h1>
                    <br></br>
                    <Image
                      alt="Swift Enterprises Logo"
                      src={logo}
                      className="h-12 w-auto"/>
            <p>
              Nothing is more important to Swift Enterprises than protecting the
              private information of visitors to our site. Below you'll find
              information about our commitment to ensuring the privacy of your
              personally identifiable information. Please read the following
              carefully.
                    </p>
                    <br/>
                    <h2 className="font-bold">Gathering and Use of Information</h2>
                    <br/>
            <p>
              Swift Enterprises will never willfully disclose any personally
              identifiable information about our online audience to any third
              party without first receiving the user's permission. We do not
              collect personally identifiable information from our visitors other
              than what is supplied to us on a voluntary basis.
                    </p>
                    <br />
            <p>
              Swift Enterprises may use such information only for conducting the
              activities stated above, for internal marketing and promotional
              purposes, or, on occasion, when mailing lists are made available to
              other organizations. (The occasional provision of mailing lists to
              such organizations is the only case where such information would be
              provided to third parties). For more information regarding Swift
              Enterprises’ policies on the handling and use of Swift Enterprises’
              membership list, please see Swift Enterprises’ Membership List
              Policy. The extent of such use is always explained at the time a
              site visitor provides such information. If the visitor does not want
              this information collected and used by us for the disclosed internal
              purposes, the visitor is given an opportunity to 'opt-out.' Our
              visitors need to recognize, however, that under certain
              circumstances, if they select to 'opt-out' they may not be eligible
              for certain activities for which the personally identifiable
              information is needed. For example, if a contest participant elects
              to 'opt-out' on permitting us to collect and use their personal
              information, we cannot contact them if they win without using such
              information.
                    </p>
                    <br />
            <h2 className="font-bold">
              Acceptance of these Swift Enterprises Web Site Privacy Policy Terms
              and Conditions
                    </h2>
                    <br/>
            <p>
              By using this site, you signify your agreement to the terms and
              conditions of this Swift Enterprises Web Site Privacy Policy. If you
              do not agree to these terms and conditions, please do not use the
              site. We reserve the right, at our sole discretion, to change,
              modify, add, or remove portions of this policy at any time. Please
              check this page periodically for any changes. Your continued use of
              the Swift Enterprises Web Site following the posting of any changes
              to these terms shall mean that you have accepted those changes.
            </p>
  
            
          </div>
        </div>
      </>
    );
}
 
export default PrivacyPolicyPage;