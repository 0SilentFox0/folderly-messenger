<template>
  <section class="privacy">
    <ContainerNew>
      <div>
        <router-link class="back-button" to="/">
          <SvgIcon name="arrow-left" width="16" height="16" fill="#195EE6" />
          <div class="button-text">Go Home</div>
        </router-link>
      </div>
      <div class="tabs">
        <div v-for="(tab, index) in tabs" :key="index" class="tab">
          <router-link :to="tab.link" class="tab-title">{{
            tab.title
          }}</router-link>
        </div>
      </div>
      <ContainerNew>
        <div class="border-bottom"></div>
      </ContainerNew>

      <div class="article-base">
        <div class="heading">Terms and Conditions</div>
        <div class="update">Last updated: April 30, 2022</div>

        <p>
          Please read these terms and conditions carefully before using Our
          Service.
        </p>
        <h2><strong>Interpretation and Definitions</strong></h2>
        <h2><strong>Interpretation</strong></h2>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h2><strong>Definitions</strong></h2>
        <p>For the purposes of these Terms and Conditions:</p>
        <p>
          <strong>Application</strong> means the software program provided by
          the Company downloaded by You on any electronic device, named Folderly
        </p>
        <p>
          <strong>Application Store</strong> means the digital distribution
          service operated and developed by Apple Inc. (Apple App Store) or
          Google Inc. (Google Play Store) in which the Application has been
          downloaded.
        </p>
        <p>
          <strong>Affiliate</strong> means an entity that controls, is
          controlled by or is under common control with a party, where "control"
          means ownership of 50% or more of the shares, equity interest or other
          securities entitled to vote for election of directors or other
          managing authority.
        </p>
        <p>
          <strong>Account</strong> means a unique account created for You to
          access our Service or parts of our Service.
        </p>
        <p><strong>Country</strong> refers to: Delaware, United States</p>
        <p>
          <strong>Company</strong> (referred to as either "the Company", "We",
          "Us" or "Our" in this Agreement) refers to Folderly Inc, 8 The Green
          Suite #10781 Dover, DE 19901.
        </p>
        <p>
          <strong>Content</strong> refers to content such as text, images, or
          other information that can be posted, uploaded, linked to or otherwise
          made available by You, regardless of the form of that content.
        </p>
        <p>
          <strong>Device</strong> means any device that can access the Service
          such as a computer, a cellphone or a digital tablet.
        </p>
        <p>
          <strong>Feedback</strong> means feedback, innovations or suggestions
          sent by You regarding the attributes, performance or features of our
          Service.
        </p>
        <p>
          <strong>Free Trial</strong> refers to a limited period of time that
          may be free when purchasing a Subscription.
        </p>
        <p>
          <strong>Orders</strong> mean a request by You to purchase services
          from Us.
        </p>
        <p>
          <strong>Promotions</strong> refer to contests, sweepstakes or other
          promotions offered through the Service.
        </p>
        <p>
          <strong>Service</strong> refers to the Application or the Website or
          both.
        </p>
        <p>
          <strong>Subscriptions</strong> refer to the services or access to the
          Service offered on a subscription basis by the Company to You.
        </p>
        <p>
          <strong>Terms and Conditions</strong> (also referred as "Terms") mean
          these Terms and Conditions that form the entire agreement between You
          and the Company regarding the use of the Service.
        </p>
        <p>
          <strong>Third-party Social Media Service</strong> means any services
          or content (including data, information, products or services)
          provided by a third-party that may be displayed, included or made
          available by the Service.
        </p>
        <p>
          <strong>Website</strong> refers to Folderly, accessible from
          <a href="http://folderly.com/">http://folderly.com/</a>
        </p>
        <p>
          <strong>You</strong> means the individual accessing or using the
          Service, or the company, or other legal entity on behalf of which such
          individual is accessing or using the Service, as applicable.
        </p>
        <h2><strong>Acknowledgment</strong></h2>
        <p>
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </p>
        <p>
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>
        <h2><strong>Placing Orders</strong></h2>
        <p>
          By placing an Order through the Service, You warrant that You are
          legally capable of entering into binding contracts
        </p>
        <h2><strong>Your Information</strong></h2>
        <p>
          If You wish to place an Order for services available on the Service,
          You may be asked to supply certain information relevant to Your Order
          including, without limitation, Your name, Your email, Your phone
          number, Your credit card number, the expiration date of Your credit
          card, Your billing address, and Your shipping information.
        </p>
        <p>
          You represent and warrant that: (i) You have the legal right to use
          any credit or debit card(s) or other payment method(s) in connection
          with any Order; and that (ii) the information You supply to us is
          true, correct and complete.
        </p>
        <p>
          By submitting such information, You grant us the right to provide the
          information to payment processing third parties for purposes of
          facilitating the completion of Your Order.
        </p>
        <h2><strong>Order Cancellation</strong></h2>
        <p>
          We reserve the right to refuse or cancel Your Order at any time for
          certain reasons including but not limited to:
        </p>
        <ul>
          <li>services availability</li>
          <li>Errors in the description or prices for services</li>
          <li>Errors in Your Order</li>
        </ul>
        <p>
          We reserve the right to refuse or cancel Your Order if fraud or an
          unauthorized or illegal transaction is suspected.
        </p>
        <h2><strong>Availability, Errors and Inaccuracies</strong></h2>
        <p>
          We are constantly updating Our offerings of services. Sometimes We may
          be unable to provide services due to technical failures or other
          issues. The descriptions of services may contain unintentional errors
          or inaccuracies. We do our best to correct them as soon as we spot
          them. We reserve the right to change or update information and to
          correct errors, inaccuracies, or omissions at any time without prior
          notice.
        </p>
        <h2><strong>Prices Policy</strong></h2>
        <p>
          The Company reserves the right to revise its prices at any time prior
          to accepting an Order.
        </p>
        <p>
          The prices quoted may be revised by the Company subsequent to
          accepting an Order in the event of any occurrence affecting delivery
          caused by government action, variation in customs duties, increased
          shipping charges, higher foreign exchange costs and any other matter
          beyond the control of the Company. In that event, You will have the
          right to cancel Your Order.
        </p>
        <h2><strong>Payments</strong></h2>
        <p>
          All services purchased are subject to a one-time payment. Payment can
          be made through various payment methods we have available, such as
          Visa, MasterCard, Affinity Card, American Express cards or online
          payment methods (PayPal, for example).
        </p>
        <p>
          Payment cards (credit cards or debit cards) are subject to validation
          checks and authorization by Your card issuer. If we do not receive the
          required authorization, We will not be liable for any delay or
          non-delivery of Your Order.
        </p>
        <h2><strong>Subscriptions</strong></h2>
        <h2><strong>Subscription period</strong></h2>
        <p>
          The Service or some parts of the Service are available only with a
          paid Subscription. You will be billed in advance on a recurring and
          periodic basis (such as daily, weekly, monthly or annually), depending
          on the type of Subscription plan you select when purchasing the
          Subscription.
        </p>
        <p>
          At the end of each period, Your Subscription will automatically renew
          under the exact same conditions unless You cancel it or the Company
          cancels it.
        </p>
        <h2><strong>Subscription cancellations</strong></h2>
        <p>
          You may cancel Your Subscription renewal either through Your Account
          settings page or by contacting the Company. You will not receive a
          refund for the fees You already paid for Your current Subscription
          period and You will be able to access the Service until the end of
          Your current Subscription period.
        </p>
        <h2><strong>Billing</strong></h2>
        <p>
          You shall provide the Company with accurate and complete billing
          information including full name, address, state, zip code, telephone
          number, and a valid payment method information.
        </p>
        <p>
          Should automatic billing fail to occur for any reason, the Company
          will issue an electronic invoice indicating that you must proceed
          manually, within a certain deadline date, with the full payment
          corresponding to the billing period as indicated on the invoice.
        </p>
        <h2><strong>Fee Changes</strong></h2>
        <p>
          <span style="font-weight: 400"
            >The Company, in its sole discretion and at any time, may modify the
            Subscription fees. Any Subscription fee change will become effective
            at the end of the then-current Subscription period.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >The Company will provide You with reasonable prior notice of any
            change in Subscription fees to give You an opportunity to terminate
            Your Subscription before such change becomes effective.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >All Subscription fees are exclusive of all taxes, levies, or duties
            imposed by taxing or other authorities, and You are responsible for
            payments of all taxes, levies, or duties applicable to You. You
            cover any and all currency exchange rates.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >Your continued use of the Service after the Subscription fee change
            comes into effect constitutes Your agreement to pay the modified
            Subscription fee amount.</span
          >
        </p>
        <h2><strong>Refunds</strong></h2>
        <p>
          <span style="font-weight: 400"
            >To the extent permitted by the applicable law of the United States
            or any other country, state or territory, payments are
            non-refundable and we do not provide refunds for paid Subscription
            fees or any other Service, credits or bonuses for any partial usage
            periods or unused Company materials or services.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >If You stop using Our Service during the Subscription Period, we
            will not refund You the fees paid by You for the remaining duration
            of the Subscription Period.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >You can upgrade or downgrade the level of Our services at any time
            of Your usage, however the Company does not refund any fees in that
            case.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >Certain refund requests for Subscriptions may be considered by the
            Company on a case-by-case basis and granted at the sole discretion
            of the Company.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >This refund policy applies to all the services listed on
            Company&rsquo;s website unless otherwise noted.</span
          >
        </p>
        <h2><strong>Free Trial</strong></h2>
        <p>
          <span style="font-weight: 400"
            >The Company may, at its sole discretion, offer a Subscription with
            a Free trial for a limited period of time.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >You may be required to enter Your billing information in order to
            sign up for the Free trial.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >If You do enter Your billing information when signing up for a Free
            Trial, You will not be charged by the Company until the Free trial
            has expired. On the last day of the Free Trial period, unless You
            cancelled Your Subscription, You will be automatically charged the
            applicable Subscription fees for the type of Subscription You have
            selected.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >At any time and without notice, the Company reserves the right to
            (i) modify the terms and conditions of the Free Trial offer, or (ii)
            cancel such Free trial offer.</span
          >
        </p>
        <h2><strong>Promotions</strong></h2>
        <p>
          <span style="font-weight: 400"
            >Any Promotions made available through the Service may be governed
            by rules that are separate from these Terms.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >If You participate in any Promotions, please review the applicable
            rules as well as our Privacy policy. If the rules for a Promotion
            conflict with these Terms, the Promotion rules will apply.</span
          >
        </p>
        <h2><strong>User Accounts</strong></h2>
        <p>
          <span style="font-weight: 400"
            >When You create an account with Us, You must provide Us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of Your account on Our Service.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >You are responsible for safeguarding the password that You use to
            access the Service and for any activities or actions under Your
            password, whether Your password is with Our Service or a Third-Party
            Social Media Service.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >You agree not to disclose Your password to any third party. You
            must notify Us immediately upon becoming aware of any breach of
            security or unauthorized use of Your account.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than You
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.</span
          >
        </p>
        <p>
          <span style="font-weight: 400"
            >Company may suspend or terminate Your account if we suspect that
            You have engaged in fraudulent, illegal, unlawful or any other
            restricted (including but not limited to sanctions or financing
            terrorist activities) activity in connection with the services
            offered by Us. No refunds are provided in this case.</span
          >
        </p>
        <h2><strong>Content</strong></h2>
        <h2><strong>Your Right to Post Content</strong></h2>
        <p>
          Our Service allows You to post Content. You are responsible for the
          Content that You post to the Service, including its legality,
          reliability, and appropriateness.
        </p>
        <p>
          By posting Content to the Service, You grant Us the right and license
          to use, modify, publicly perform, publicly display, reproduce, and
          distribute such Content on and through the Service. You retain any and
          all of Your rights to any Content You submit, post or display on or
          through the Service and You are responsible for protecting those
          rights. You agree that this license includes the right for Us to make
          Your Content available to other users of the Service, who may also use
          Your Content subject to these Terms.
        </p>
        <p>
          You represent and warrant that: (i) the Content is Yours (You own it)
          or You have the right to use it and grant Us the rights and license as
          provided in these Terms; (ii) the posting of Your Content on or
          through the Service does not violate the privacy rights, publicity
          rights, copyrights, contract rights or any other rights of any person;
          (iii) Your contact information in Your outbound emails is full and
          correct; (iv) You do not and will not use any deception or provide
          inaccurate information in the email subject line or email body, and
          (v) You are aware of and agree to fulfill the requirements of The
          Controlling the Assault of Non-Solicited Pornography And Marketing Act
          of 2003 (CAN-SPAM Act) and other applicable legislation even in case
          Your primary business or legal entity is located outside the territory
          of the United States.
        </p>
        <p>
          You are obliged to provide an explanation on the way you procure
          contact information to send your promotional or other email through
          our Service. We do not allow to send emails to contacts obtained
          illegally or unethically, including but not limited to data theft,
          deception, hacking, spoofing, fishing etc. Every email you send
          through our Service must contain Your full contact information and an
          active link allowing the person who receives emails from You to
          unsubscribe from Your mailing list.
        </p>
        <h2><strong>Content Restrictions</strong></h2>
        <p>
          The Company is not responsible for the content of the Service's users.
          You expressly understand and agree that You are solely responsible for
          the Content and for all activity that occurs under your account,
          whether done so by You or any third person using Your account.
        </p>
        <p>
          You may not transmit any Content that is unlawful, offensive,
          upsetting, intended to disgust, threatening, libelous, defamatory,
          obscene or otherwise objectionable. Examples of such objectionable
          Content include, but are not limited to, the following:
        </p>
        <ul>
          <li>Unlawful or promoting unlawful activity.</li>
          <li>
            Defamatory, discriminatory, or mean-spirited content, including
            references or commentary about religion, race, sexual orientation,
            gender, national/ethnic origin, or other targeted groups.
          </li>
          <li>
            Spam, machine &ndash; or randomly &ndash; generated, constituting
            unauthorized or unsolicited advertising, chain letters, any other
            form of unauthorized solicitation, or any form of lottery or
            gambling.
          </li>
          <li>
            Containing or installing any viruses, worms, malware, trojan horses,
            or other content that is designed or intended to disrupt, damage, or
            limit the functioning of any software, hardware or
            telecommunications equipment or to damage or obtain unauthorized
            access to any data or other information of a third person.
          </li>
          <li>
            Infringing on any proprietary rights of any party, including patent,
            trademark, trade secret, copyright, right of publicity or other
            rights.
          </li>
          <li>
            Impersonating any person or entity including the Company and its
            employees or representatives.
          </li>
          <li>Violating the privacy of any third person.</li>
          <li>False information and features.</li>
        </ul>
        <p>
          The Company reserves the right, but not the obligation, to, in its
          sole discretion, determine whether or not any Content is appropriate
          and complies with this Terms, refuse or remove this Content. The
          Company further reserves the right to make formatting and edits and
          change the manner any Content. The Company can also limit or revoke
          the use of the Service if You post such objectionable Content. As the
          Company cannot control all content posted by users and/or third
          parties on the Service, you agree to use the Service at your own risk.
          You understand that by using the Service You may be exposed to content
          that You may find offensive, indecent, incorrect or objectionable, and
          You agree that under no circumstances will the Company be liable in
          any way for any content, including any errors or omissions in any
          content, or any loss or damage of any kind incurred as a result of
          your use of any content.
        </p>
        <h2><strong>Content Backups</strong></h2>
        <p>
          Although regular backups of Content are performed, the Company do not
          guarantee there will be no loss or corruption of data.
        </p>
        <p>
          Corrupt or invalid backup points may be caused by, without limitation,
          Content that is corrupted prior to being backed up or that changes
          during the time a backup is performed.
        </p>
        <p>
          The Company will provide support and attempt to troubleshoot any known
          or discovered issues that may affect the backups of Content. But You
          acknowledge that the Company has no liability related to the integrity
          of Content or the failure to successfully restore Content to a usable
          state.
        </p>
        <p>
          You agree to maintain a complete and accurate copy of any Content in a
          location independent of the Service.
        </p>
        <h2><strong>Copyright Policy</strong></h2>
        <h2><strong>Intellectual Property Infringement</strong></h2>
        <p>
          We respect the intellectual property rights of others. It is Our
          policy to respond to any claim that Content posted on the Service
          infringes a copyright or other intellectual property infringement of
          any person.
        </p>
        <p>
          If You are a copyright owner, or authorized on behalf of one, and You
          believe that the copyrighted work has been copied in a way that
          constitutes copyright infringement that is taking place through the
          Service, You must submit Your notice in writing to the attention of
          our copyright agent via email at dmca@folderly.com and include in Your
          notice a detailed description of the alleged infringement.
        </p>
        <p>
          You may be held accountable for damages (including costs and
          attorneys' fees) for misrepresenting that any Content is infringing
          Your copyright.
        </p>
        <h2>
          <strong
            >DMCA Notice and DMCA Procedure for Copyright Infringement
            Claims</strong
          >
        </h2>
        <p>
          You may submit a notification pursuant to the Digital Millennium
          Copyright Act (DMCA) by providing our Copyright Agent with the
          following information in writing (see 17 U.S.C 512(c)(3) for further
          detail):
        </p>
        <ul>
          <li>
            An electronic or physical signature of the person authorized to act
            on behalf of the owner of the copyright's interest.
          </li>
          <li>
            A description of the copyrighted work that You claim has been
            infringed, including the URL (i.e., web page address) of the
            location where the copyrighted work exists or a copy of the
            copyrighted work.
          </li>
          <li>
            Identification of the URL or other specific location on the Service
            where the material that You claim is infringing is located.
          </li>
          <li>Your address, telephone number, and email address.</li>
          <li>
            A statement by You that You have a good faith belief that the
            disputed use is not authorized by the copyright owner, its agent, or
            the law.
          </li>
          <li>
            A statement by You, made under penalty of perjury, that the above
            information in Your notice is accurate and that You are the
            copyright owner or authorized to act on the copyright owner's
            behalf.
          </li>
        </ul>
        <p>
          You can contact our copyright agent via email at dmca@folderly.com.
          Upon receipt of a notification, the Company will take whatever action,
          in its sole discretion, it deems appropriate, including removal of the
          challenged content from the Service.
        </p>
        <h2><strong>Intellectual Property</strong></h2>
        <p>
          The Service and its original content (excluding Content provided by
          You or other users), features and functionality are and will remain
          the exclusive property of the Company and its licensors.
        </p>
        <p>
          The Service is protected by copyright, trademark, and other laws of
          both the Country and foreign countries.
        </p>
        <p>
          Our trademarks and trade dress may not be used in connection with any
          product or service without the prior written consent of the Company.
        </p>
        <h2><strong>Your Feedback to Us</strong></h2>
        <p>
          You assign all rights, title and interest in any Feedback You provide
          the Company. If for any reason such assignment is ineffective, You
          agree to grant the Company a non-exclusive, perpetual, irrevocable,
          royalty free, worldwide right and license to use, reproduce, disclose,
          sub-license, distribute, modify and exploit such Feedback without
          restriction.
        </p>
        <h2><strong>Links to Other Websites</strong></h2>
        <p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party web
          sites or services. You further acknowledge and agree that the Company
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          the use of or reliance on any such content, goods or services
          available on or through any such web sites or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy
          policies of any third-party web sites or services that You visit.
        </p>
        <h2><strong>Termination</strong></h2>
        <p>
          We may terminate or suspend Your Account immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions.
        </p>
        <p>
          Upon termination, Your right to use the Service will cease
          immediately. If You wish to terminate Your Account, You may simply
          discontinue using the Service.
        </p>
        <h2><strong>Limitation of Liability</strong></h2>
        <p>
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.
        </p>
        <p>
          To the maximum extent permitted by applicable law, in no event shall
          the Company or its suppliers be liable for any special, incidental,
          indirect, or consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose.
        </p>
        <p>
          Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party's liability will be limited to the greatest extent
          permitted by law.
        </p>
        <h2><strong>"AS IS" and "AS AVAILABLE" Disclaimer</strong></h2>
        <p>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
          faults and defects without warranty of any kind. To the maximum extent
          permitted under applicable law, the Company, on its own behalf and on
          behalf of its Affiliates and its and their respective licensors and
          service providers, expressly disclaims all warranties, whether
          express, implied, statutory or otherwise, with respect to the Service,
          including all implied warranties of merchantability, fitness for a
          particular purpose, title and non-infringement, and warranties that
          may arise out of course of dealing, course of performance, usage or
          trade practice. Without limitation to the foregoing, the Company
          provides no warranty or undertaking, and makes no representation of
          any kind that the Service will meet Your requirements, achieve any
          intended results, be compatible or work with any other software,
          applications, systems or services, operate without interruption, meet
          any performance or reliability standards or be error free or that any
          errors or defects can or will be corrected.
        </p>
        <p>
          Without limiting the foregoing, neither the Company nor any of the
          company's provider makes any representation or warranty of any kind,
          express or implied: (i) as to the operation or availability of the
          Service, or the information, content, and materials or products
          included thereon; (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability, or currency of any
          information or content provided through the Service; or (iv) that the
          Service, its servers, the content, or e-mails sent from or on behalf
          of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
        </p>
        <h2><strong>Governing Law</strong></h2>
        <p>
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this Terms and Your use of the Service. Your use of the
          Application may also be subject to other local, state, national, or
          international laws.
        </p>
        <h2><strong>Disputes Resolution</strong></h2>
        <p>
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </p>
        <h2><strong>For European Union (EU) Users</strong></h2>
        <p>
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which you are
          resident in.
        </p>
        <h2>
          <strong>United States Federal Government End Use Provisions</strong>
        </h2>
        <p>
          If You are a U.S. federal government end user, our Service is a
          "Commercial Item" as that term is defined at 48 C.F.R. &sect;2.101.
        </p>
        <h2><strong>United States Legal Compliance</strong></h2>
        <p>
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo, or that has
          been designated by the United States government as a "terrorist
          supporting" country, and (ii) You are not listed on any United States
          government list of prohibited or restricted parties.
        </p>
        <h2><strong>Severability and Waiver</strong></h2>
        <h2><strong>Severability</strong></h2>
        <p>
          If any provision of these Terms is held to be unenforceable or
          invalid, such provision will be changed and interpreted to accomplish
          the objectives of such provision to the greatest extent possible under
          applicable law and the remaining provisions will continue in full
          force and effect.
        </p>
        <h2><strong>Waiver</strong></h2>
        <p>
          Except as provided herein, the failure to exercise a right or to
          require performance of an obligation under this Terms shall not effect
          a party's ability to exercise such right or require such performance
          at any time thereafter nor shall be the waiver of a breach constitute
          a waiver of any subsequent breach.
        </p>
        <h2><strong>Translation Interpretation</strong></h2>
        <p>
          These Terms and Conditions may have been translated if We have made
          them available to You on our Service. You agree that the original
          English text shall prevail in the case of a dispute.
        </p>
        <h2><strong>Changes to These Terms and Conditions</strong></h2>
        <p>
          We reserve the right, at Our sole discretion, to modify or replace
          these Terms at any time. If a revision is material We will make
          reasonable efforts to provide at least 30 days' notice prior to any
          new terms taking effect. What constitutes a material change will be
          determined at Our sole discretion.
        </p>
        <p>
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or in part, please stop using
          the website and the Service.
        </p>
        <h2><strong>Contact Us</strong></h2>
        <p>
          If you have any questions about these Terms and Conditions, You can
          contact us:
        </p>
        <p>By email: support@folderly.com</p>
        <p>
          By visiting this page on our website:
          <a href="http://folderly.com/">http://folderly.com/</a>
        </p>
        <p>By mail: 8 The Green Suite #10781 Dover, DE 19901</p>

        <div class="home-button">
          <router-link to="/">Go Gome</router-link>
        </div>
      </div>
    </ContainerNew>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerNew from '@/components/ui/Container/ContainerNew.vue';

export default defineComponent({
  components: { ContainerNew },

  data() {
    return {
      tabs: [
        { title: 'Privacy Policy', link: '/privacy-policy' },
        { title: 'Terms & Conditions', link: '/terms-of-use' },
      ],

      items: [
        'Application means the software program provided by the Company downloaded by You on any electronic device, named Folderly.',
        'Application means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.',
        'Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
        'Account means a unique account created for You to access our Service or parts of our Service.',
        'Country refers to: Delaware, United States',
        'Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Folderly Inc, 8 The Green Suite #10781 Dover, DE 19901.',
        'Content refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.',
        'Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.',
        'Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.',
        'Free Trial refers to a limited period of time that may be free when purchasing a Subscription.',
        'Goods refer to the items offered for sale on the Service.',
        'Orders mean a request by You to purchase Goods from Us.',
        'Promotions refer to contests, sweepstakes or other promotions offered through the Service.',
        'Service refers to the Application or the Website or both.',
        'Subscriptions refer to the services or access to the Service offered on a subscription basis by the Company to You.',
        'Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.',
        'Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.',
        'Website refers to Folderly, accessible from http://folderly.com/',
        'You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  //   padding-bottom: 65px;

  list-style: none;
  //   border-bottom: 1px solid #dee1e8;
}

ul li::before {
  display: inline-block;
  width: 1em;
  margin-left: -1em;

  color: #a7adbe;
  font-weight: bold;

  content: '\2022';
}
.privacy {
  padding: 25px 0;
}
.back-button {
  display: flex;
  align-items: center;

  margin-bottom: 20px;
}

.button-text {
  margin-left: 8px;

  color: #195ee6;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}

.tabs {
  position: relative;

  display: flex;
  align-items: center;
  overflow: auto;
}

.border-bottom {
  position: absolute;
  right: 0;
  bottom: 5px;
  left: 0;

  height: 1px;

  background-color: $color-disabled-background;
}
.tab {
  z-index: 1;

  margin-right: 30px;

  margin-bottom: 5px;
  padding: 15px 0;

  color: $color-text-gray;
  font-size: 14px;
  line-height: 21px;

  text-transform: capitalize;

  border-bottom: 2px solid transparent;
  cursor: pointer;

  transition: border 0.3s, color 0.3s;
  &:last-child {
    margin-right: 0;
  }

  &:last-child {
    color: #14171f;

    border-color: $color-blue-accent;
  }

  &:hover {
    color: $color-primary;
  }
}

.tab-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}

.border-bottom {
  position: absolute;
  right: 0;
  bottom: 5px;
  left: 0;

  height: 1px;

  background-color: $color-disabled-background;
}

.heading {
  margin: 32px 0 16px 0;

  color: #262d40;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
}

.title {
  margin-bottom: 25px;

  color: #14171f;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}

.update {
  margin-bottom: 20px;

  color: #a7adbe;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}

.text {
  margin-bottom: 30px;

  color: #262d40;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.big {
  color: #262d40;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.item {
  margin-bottom: 20px;
  padding-left: 15px;

  color: #262d40;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}

.home-button {
  width: 100%;
  padding: 40px 0 0;

  color: #5b6171;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}

$text-font-size: 18px;
$text-font-size-mobile: 16px;
$text-line-height: 34px;

.article-base {
  max-width: 900px;

  margin-bottom: 30px;

  color: $color-article-text;
  font-size: $text-font-size;
  line-height: $text-line-height;

  white-space: normal;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 30px;

    color: $color-gray-dark;
    font-weight: bold !important;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
  }

  h2 {
    font-size: 28px;
    line-height: 38px;
  }

  h3 {
    font-size: 24px;
    line-height: $text-line-height;
  }

  h4 {
    font-size: 20px;
    line-height: 30px;
  }

  h5 {
    font-size: $text-font-size;
    line-height: 28px;
  }

  h6 {
    font-size: 16px;
    line-height: 26px;
  }

  a,
  p {
    color: $color-article-text;
    font-weight: 400;
    font-size: $text-font-size;

    @include media(tablet) {
      font-size: $text-font-size-mobile;
    }
  }

  a {
    color: $color-primary;
    font-weight: 600;
    text-decoration: underline;

    word-wrap: break-word;
    word-break: break-all;
    overflow-wrap: break-word;

    hyphens: auto;

    &:visited {
      color: $color-gray-warm-dark;

      border-bottom: 1px solid $color-gray-warm-dark;
    }
    &:hover {
      opacity: 0.8;
    }
  }

  li {
    margin-bottom: 14px;

    color: $color-article-text;
    font-size: $text-font-size;
    line-height: 30px;

    &::marker {
      color: $color-text-gray;
    }
  }

  ul {
    list-style: unset;

    li {
      margin-left: 20px;
    }
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  ul,
  ol,
  p,
  figure,
  blockquote,
  img {
    margin-bottom: 30px;
  }

  figure {
    overflow-x: auto;
  }

  .article-with-background {
    margin-bottom: 30px;
    padding: 50px;

    background-color: #f7faff;
    border-radius: 4px;

    @include media(tablet) {
      padding: 20px;
    }
  }

  table {
    position: relative;

    display: block;
    width: 100% !important;
    max-width: 900px;

    margin-bottom: 30px;

    overflow-x: auto;

    white-space: nowrap;

    border-spacing: 0;

    @include media(tablet) {
      max-width: 530px;
    }

    @include media(mobile) {
      max-width: calc(100vw - 30px);
    }
  }

  td {
    padding: 15px;

    border: 1px solid $color-table-border;
    border-right: none;
    border-bottom: none;
  }

  tbody {
    display: block;
    min-width: 900px;

    white-space: nowrap;

    tr > td {
      min-width: 200px;

      font-size: $text-font-size;
      line-height: $text-line-height;

      white-space: normal;

      td:last-child {
        border-right: 1px solid $color-table-border;
      }

      &:first-child td {
        border-bottom: none;

        &:first-child {
          border-radius: 4px 0 0 0;
        }
        &:last-child {
          border-radius: 0 4px 0 0;
        }
      }

      &:last-child td {
        border-bottom: 1px solid $color-table-border;

        &:first-child {
          border-radius: 0 0 0 4px;
        }
        &:last-child {
          border-radius: 0 0 4px 0;
        }
      }
    }
  }

  blockquote {
    position: relative;

    padding: 30px;

    color: $color-gray-warm-dark;
    font-weight: 400;
    font-size: $text-font-size;
    line-height: 38px;

    background: #fff;

    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);

    &::before {
      position: absolute;
      top: -10px;

      content: url('/assets/img/blockquote-icon.svg');
    }
  }

  img {
    width: 100%;
  }

  ol {
    padding-left: 40px;

    list-style: none;

    counter-reset: article-counter;
  }

  ol li {
    position: relative;

    color: $color-text-black;
    font-weight: normal;
    font-size: $text-font-size;
    line-height: $text-line-height;

    counter-increment: article-counter;

    b {
      font-weight: 600;
    }
  }

  ul:last-child,
  ol:last-child,
  li:last-child,
  p:last-child,
  figure:last-child,
  blockquote:last-child {
    margin-bottom: 0;
  }

  ol li::before {
    position: absolute;
    top: 0;
    left: calc(-1 * 32px - 10px);

    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    min-height: 32px;

    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: $text-line-height;
    text-align: center;

    background: $color-blue;

    border-radius: 100%;

    content: counter(article-counter);
  }
}
</style>
