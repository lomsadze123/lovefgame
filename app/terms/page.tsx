import { SectionHeader } from "@/components";
import { SliderButton } from "@/components/slider-button";
import Link from "next/link";

export default function Terms() {
  return (
    <main className="mt-9 w-full md:mt-15 lg:mb-15">
      <SectionHeader
        title="Terms of Service"
        subtitle="By using our services, you agree to these terms."
        date="Last updated: 21 April 2026"
        variant="page-title"
      />

      <div className="mx-auto mt-12 flex max-w-340 flex-col gap-10 px-7 font-light">
        <section className="flex flex-col gap-5">
          <SectionHeader
            title="A quick summary"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <ul className="flex list-decimal flex-col gap-5 pl-5 lg:pl-12 lg:[&_li]:text-xl">
            <li>
              These are the legally binding terms of services (“TOS”) for
              LoveFrom Games, websites, forums and other related services
              (collectively “Services”).
            </li>
            <li>
              You are given a personal license to use and/or play and access our
              Services it, but LoveFrom Games owns and continues to own all
              rights related to the Services.
            </li>
            <li>
              These TOS include your right to use the Services - the do&apos;s
              and the don&apos;ts.
            </li>
            <li>
              Depending on where you live, there are important terms regarding
              liability and dispute resolution (including mandatory arbitration
              and waiver of jury trial if you live in the USA).
            </li>
            <li>
              Use of the Services is also governed by our Privacy Policy
              available at{" "}
              <a href="https://lovefromgames.com/privacy/">
                https://lovefromgames.com/privacy/
              </a>{" "}
              (which explains what personal information we may collect and how
              we use and protect it).
            </li>
          </ul>
          <p className="mt-5 lg:text-xl">
            This Terms of Service (or “TOS” for short) apply to you and LoveFrom
            Games regarding your access and use of LoveFrom Games Services
            (which we explain below). Because we know legal wording is not much
            fun, we have included a short and informal summary of each section
            (but the full version is the legally binding one).
          </p>
        </section>
        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="ABOUT THESE TOS"
            variant="centered"
            className="max-w-[83dvw] font-medium"
          />
          <p>
            Agreeing to these TOS is a precondition for accessing and using our
            Services. If you accept these TOS, you represent that you are age 13
            or older (or under 16 in certain jurisdictions in the European
            Union). If you do not agree to these TOS, you may not use or
            otherwise access our Services.
          </p>
          <p>
            LoveFrom Games may change and/or update these TOS at any time in
            response to changing legal, technical or business development
            reasons. Then we will put the changed/updated version online and we
            will take appropriate measures to inform you via our Services or
            otherwise. You agree to be bound by the updated TOS, by your
            continued access and/or use of the Services after said updates.
          </p>
          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              1.1 What do these TOS apply to? ? These TOS apply to our Services,
              including (but not limited to) any interactive entertainment
              products, game key or code giving you access to it or any parts of
              it, Virtual Goods and Virtual Currency (defined below), any
              LoveFrom Games products and services related to our games, user
              accounts, customer and technical support, official forums, wikis,
              blogs and social media services.
            </li>
            <li>
              1.2 When do these TOS apply to you? These TOS will be binding once
              you access, download, install or use any of our Services. If you
              do not agree to these TOS, please do not use or access our
              Services.
            </li>
            <li>
              1.3 Will we ever change these TOS? We may change and/or update
              these TOS from time to time, for example to reflect changes in our
              Services or to reflect applicable laws. If we do, we will make the
              changed/updated TOS available online and make reasonable efforts
              to notify you of it. You are welcome to contact us at{" "}
              <a className="underline" href="mailto:support@lovefromgames.com">
                support@lovefromgames.com
              </a>{" "}
              if you have specific questions about the changes. If you do not
              agree to those changes (regardless of whether you email us), then
              unfortunately you must cease using our Services: in order to make
              all of our Services work properly we need to have everyone using
              them under the same TOS instead of different people having
              different rules.
            </li>
            <li>
              1.4 Are there any other important documents you should read?
              Please also read our LoveFrom Games Privacy Policy available at{" "}
              <a
                className="underline"
                href="https://lovefromgames.com/privacy/1.1"
              >
                https://lovefromgames.com/privacy/1.1
              </a>{" "}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="ACCESSING AND USING OUR SERVICES, YOUR RIGHTS"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />

          <p>
            You have the personal right to access and use our Services. If
            Services involve a user account, then you are responsible for it.
          </p>
          <p>
            Regardless of your age, you can access and use our Services,
            However, if you are 13 years or older (or 16 in certain
            jurisdictions in the European Union), we may collect personal
            information with your consent.
          </p>

          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              2.1. We give you a personal, limited, revocable, non-exclusive,
              non-transferable, non-sublicensable and non-assignable license to
              use the Services. This license is for your personal non-commercial
              use only (so you cannot give, ‘sell’, lend, gift, assign,
              sublicense or otherwise transfer it to someone else) and does not
              give you any ownership rights in the Services. You do not receive
              any other license. We own and continue to own all of our Services
              including (but not limited to) all copyrights, computer codes,
              characters, etc.
            </li>
            <li>
              2.2. What about user accounts? In order to access the Services,
              you may need to create a user account or use an existing account
              (if you have one). You are solely responsible for protecting your
              user account and for your account activities. In particular, keep
              your account and password secure. In order to protect our
              Services, users and LoveFrom Games itself, we reserve the right,
              if necessary, to reject any user account if it would breach these
              TOS or other applicable rules.
            </li>
            <li>
              2.3. Are there any age restrictions? Regardless of your age, you
              can access and use our Services, However, if you are 13 years or
              older (or 16 in certain jurisdictions in the European Union), we
              may collect personal information with your consent within our
              Services.
            </li>
            <li>
              2.4. Are there any minimum requirements? Some of our Services may
              have minimum requirements depending on your chosen device/platform
              or other similar issues, of which you will be notified at the
              time. It is your responsibility to ensure you meet these
              requirements before accessing or using the Services. To access or
              use some of our Services, you will need Internet access too –
              again, this is your responsibility.
            </li>
            <li>
              2.5. What about monitoring? In order to protect LoveFrom Games,
              LoveFrom Games users and to enforce these TOS, LoveFrom Games may
              deploy anti-cheat and/or other software tools that run in the
              background of your device or related devices/peripherals when you
              use the Services.
            </li>
            <li>
              2.6. What about third-party access and content? You might get
              links from us to third party websites or content through the
              Services. You may also access the Services through different
              social platforms and devices. Your use of them is your
              responsibility - we cannot promise they will work, what they will
              be like or if they are free. The Services may contain third party
              services such as gameplay recording and sharing, social media
              connectivity, video offers and in-game advertisements. While we
              try to pick the best partners to work with, we are not responsible
              for their content nor services (that is for the partner itself).
              These are services are subject to respective third-party terms and
              conditions and constitutes agreement between you and that relevant
              third party (to which LoveFrom Games is not a party).
            </li>
            <li>
              2.7. Are there any health & safety issues to be aware of? Please
              be aware our Services may contain flashing images which may
              potentially trigger seizures for people with epilepsy. Player
              discretion is advised.
            </li>
            <li>
              2.8. What can and can&apos;t you do? In order for you to be able
              to access and use the Services, we ask you to follow some rules
              not limited to the following. Please read these rules carefully
              since failure to follow them (particularly those in relation to
              cheating) will be considered a material breach of these TOS, which
              may lead to suspension or cancellation (temporary or permanent) of
              your access and use of the Services. Here are the main rules that
              you agree to (under all circumstances):
            </li>
          </ul>
          <ul className="flex list-[upper-roman] flex-col gap-1 pl-16 lg:gap-2 lg:[&_li]:text-xl">
            <li>
              Personal enjoyment. Only access and use our Services for your
              personal enjoyment and not for any advertising (or transmission of
              any commercial advertisements such as spam emails), other
              commercial or political purposes.
            </li>
            <li>
              Restricted access. Do not attempt to copy, rent, sell, lend,
              lease, sublicense, distribute, publish or publicly display the
              Services, Virtual Currency or Virtual Goods (defined below), any
              user account or any of your rights under these TOS to any other
              party in any way not expressly authorized herein.
            </li>
            <li>
              Technical misuse. Do not modify, merge, distribute, translate,
              reverse engineer, or attempt to obtain or use source code of,
              decompile or disassemble the Services unless you are specifically
              allowed by applicable law.
            </li>
            <li>
              Hacking/griefing. Do not hack, harm, grief, harass, threaten or
              misuse the Services, other users of our Services of any LoveFrom
              Games products, games, services, community members or staff.
            </li>
            <li>
              Cheating. Do not create, use, make available and/or distribute
              cheats, exploits, automation software, robots, bots, mods, hacks,
              spiders, spyware, cheats, scripts, trainers, extraction tools or
              other software that interact with or affect the Services in any
              way (including, without limitation, any unauthorized third party
              programs that intercept, emulate, or redirect any communication
              between LoveFrom Games or its partners and our Services and/or any
              unauthorized third party programs that collect information about
              the Services by reading areas of memory used by the Services to
              store information).
            </li>
            <li>
              Account misuse. Do not share, &apos;buy&apos;, &apos;sell&apos;,
              transfer, gift, lend, steal or misappropriate user accounts or the
              Services access keys/codes (all of which are our property). If you
              are concerned that any of this has happened to you, contact
              customer support at{" "}
              <Link
                href="mailto:support@lovefromgames.com"
                className="underline"
              >
                support@lovefromgames.com
              </Link>
              .
            </li>
            <li>
              Power-leveling. Do not perform in-game services for others like
              power-leveling, boosting or ladder- climbing, whether or not in
              exchange for payment (real money or otherwise) from others.
            </li>
            <li>
              No advertising. . Do not communicate or facilitate any commercial
              advertisement, promotion, spam or unsolicited messages through the
              Services.
            </li>
            <li>
              LoveFrom games services. Do not deliberately or maliciously
              interrupt or interfere with the Services, any other LoveFrom Games
              services like customer or technical support or impersonate
              LoveFrom Games staff.
            </li>
            <li>
              Interfering with servers. Do not overburden, interfere with or
              disrupt the Services or third party network software or servers,
              including via tunneling, code injection or insertion, denial of
              service, modifying or changing the software, using any other
              similar software together with LoveFrom Games software, through
              protocol emulation, or through creation or use of private servers
              or any analogous services regarding the Services.
            </li>
            <li>
              Accessing servers. Do not access or attempt to access areas of the
              Services or servers that have not been made available to the
              public.
            </li>
            <li>
              Data mining. Do not intercept, mine or otherwise collect any data
              or information from the Services, other people using the Services,
              including, but not limited to using unauthorized third-party
              software or use of pixel tags, cookies GIFs or similar items
              sometimes also referred to as spyware.
            </li>
            <li>
              Accounts and virtual content. Only use user accounts, Virtual
              Goods or Virtual Currency (defined below) for their intended
              purpose.
            </li>
            <li>
              Names/trademarks. Do not use LoveFrom Games, Paper Toss + or any
              other names of any Services or other LoveFrom Games names or logos
              or trademarks for any unauthorized purposes.
            </li>
            <li>
              Infringing Content. Do not do anything in connection with the
              Services that infringes any copyright, trademark, patent, trade
              secret, privacy, publicity, or other right of others, such as
              images, photographs, sound files, text files, graphics files, and
              any other material or information.
            </li>
            <li>
              Malicious Code. Do not post or upload any files that contain any
              malicious code, including viruses, spyware, Trojan horses, worms,
              time bombs, intentionally corrupted data, any other files that
              contain malicious code or that may in any way damage or interfere
              with the operation of the Services.
            </li>
            <li>
              Geographic/regional restrictions. You must follow any applicable
              geographic or regional, language or location-based restrictions,
              requirements or rules regarding the Services.
            </li>
            <li>
              Conduct. Do not do, post or say anything that is or may be
              considered threatening, racist, harassing, xenophobic, sexist,
              discriminatory, abusive, defamatory or otherwise offensive or
              illegal. This includes in any chat or other communications with
              users. LoveFrom Games reserves the right to monitor the content of
              any of your messages and prevent your use of any such chat or
              other communication systems for any reason. Please report any
              behavior you think is in breach of this rule by sending a message
              to{" "}
              <Link
                href="mailto:support@lovefromgames.com"
                className="underline"
              >
                support@lovefromgames.com
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="USER GENERATED CONTENT AND COMMUNITY CONTENT"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />

          <p>
            If you share content in-game via the Services (e.g. sending links),
            this is your responsibility.
          </p>

          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              3.1 What is our position on ‘user generated content’? The Services
              may give you the ability to share content (for example to share
              text, photos or links with users) – we will call this “User
              Generated Content”. If you do share User Generated Content, then
              it is at your responsibility and risk. We have the right (but not
              the obligation) to check and remove any inappropriate or illegal
              User Generated Content. But to be clear: we do not assume any
              responsibility or liability for User Generated Content. As far as
              we and you are concerned, you own any User Generated Content you
              created but we need you to give us certain rights over it so that
              we can actually transmit it via the Services. So, when you make
              your User Generated Content available through the Services you
              give us a non-exclusive, permanent, irrevocable, worldwide,
              sublicensable, royalty-free license to use, modify, reproduce,
              create derivative works from, distribute, transmit, communicate
              and publicly display/perform your User Generated Content in
              connection with the Services.
            </li>
            <li>
              3.2 What is our position if you participate in a LoveFrom Game
              contest or competition? When submitting material as part of a
              contest or competition, you hereby give LoveFrom Game a non-
              exclusive, permanent, irrevocable, worldwide, sublicensable,
              royalty-free license to use, modify, reproduce, create derivative
              works from, distribute, transmit, communicate and publicly
              display/perform your user-generated content without any further
              notice or compensation to you of any kind unless otherwise
              specifically stated in the competition&apos;s submission rules and
              regulations.
            </li>
            <li>
              3.3 When you submit your user-generated content and information as
              part of a LoveFrom Games contest, you give LoveFrom Games the
              unconditional right to use your name, image and other information
              submitted during the course of the contest. You give us the right
              to use the information you provide without any further obligation,
              notice or compensation to you. Except where prohibited by law, you
              forfeit any claim or right to attribution or credit for your
              user-generated content, even in situations in which the content is
              ultimately changed, altered or modified in any way.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="VIRTUAL CURRENCY AND VIRTUAL GOODS"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />

          <p>
            You may be able to buy and/or otherwise obtain things like
            cosmetics, in-game enhancements or virtual currencies and there are
            some additional legal rules for them. They do not have any “real
            world” monetary value and you cannot buy, sell or trade these with
            other users.
          </p>

          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              4.1. Do the Services offer virtual goods or virtual currencies?
              The Services may let you purchase and/or otherwise obtain (for
              example, by completing offers or watching in-game advertisements)
              virtual, in- game digital items and content including for example
              cosmetic and in-game enhancements and other downloadable content
              (“Virtual Goods”) . You may at our discretion be able to buy
              certain Virtual Goods with “real world” money and/or virtual
              currency (which you may be able to earn by playing the game and/or
              with “real world” money) (we will call this “Virtual Currency” ).
              We are the sole provider and issuing authority regarding Virtual
              Goods and Virtual Currency and only the Services&apos; users can
              use them.
            </li>
            <li>
              4.2. Are there any additional payment requirements you should know
              about? ? If you buy Virtual Goods, you agree to the pricing,
              payment and billing policies applicable to them, as notified to
              you at the time of purchase. You are responsible for ensuring that
              you have authorization to use any chosen payment method, which
              includes obtaining account holder/parent/guardian approval if
              applicable. You are responsible for ensuring that this
              authorization is maintained at all material times. Do not make
              inappropriate charge-back or refund requests. You are responsible
              for applicable fees and taxes. All payments are non-refundable and
              non-transferable except as expressly provided in these TOS.
            </li>
            <li>
              4.3. What are the legal requirements regarding Virtual Goods and
              Virtual Currency? Virtual Goods and Virtual Currency are digital
              items only with no cash value or real world existence and cannot
              be &apos;bought&apos;, &apos;sold&apos;, gifted, transferred or
              redeemed, whether or not for other Virtual Goods, Virtual
              Currency, &apos;real world&apos; money, goods, services or items
              of monetary value. Trading Virtual Goods or Currency is prohibited
              (unless we specifically permit otherwise in the Services). Your
              right to use any Virtual Goods and Virtual Currency that you
              obtain is limited to a limited, non-exclusive, non-assignable,
              non- transferable, non-sublicensable, revocable license to use
              such Virtual Goods and Virtual Currency solely for your personal
              entertainment and non-commercial use in the Services only. You
              have no property interest or right or title in any Virtual Goods
              or Virtual Currency, which remain LoveFrom Games property.
              LoveFrom Games reserves the right to reverse, change or amend
              Virtual Goods or Virtual Currency transactions or other matters,
              if necessary, to protect the Services and/or to enforce these TOS.
            </li>
            <li>
              4.4. Is there a limit on the amount of Virtual Goods or Virtual
              Currency you can hold? In order to protect the Services, users and
              to stop fraud, we may impose limits on use of Virtual Goods and
              Virtual Currency (including transaction limits and balance
              amounts).
            </li>
            <li>
              4.5. Will these Virtual Goods or Virtual Currency expire or be
              revoked? Virtual Goods and Virtual Currency do not expire, but we
              reserve the right to change or amend that if necessary. We are not
              obliged to provide Virtual Goods or Virtual Currency to you.
              LoveFrom Games reserves the right to revoke from users (without
              notice or compensation) any Virtual Goods and/or Virtual Currency
              that have been obtained by users by way of (for example) bug, hack
              or exploitation of the Services or promotional offers.
            </li>
            <li>
              4.7. Can you refund purchases of Virtual Goods or Virtual
              Currency?
            </li>
          </ul>

          <p className="text-center font-medium">
            If you are resident in the European Union:
          </p>

          <p>
            Subject to the terms of any applicable device/platform via which you
            access the Services: you have the right to withdraw from a purchase
            of the Services, Virtual Goods and/or of Virtual Currency within 14
            days of your purchase, without giving a reason. You hereby expressly
            acknowledge that you lose your right of withdrawal once the
            performance of our service has begun and your account is provided
            with access to the Services, Virtual Goods and/or Virtual Currency.
            You agree that the supply of the Services, Virtual Goods and/or
            Virtual Currency and the performance of services begins immediately
            after you complete your purchase. Therefore, once access to the
            Services, Virtual Goods and/or Virtual Currency has been enabled on
            your account, the contract has been fully performed by us.
          </p>

          <p className="text-center font-medium">
            If you are resident elsewhere in the world outside the European
            Union (including the USA):
          </p>

          <p>
            Subject to the terms of any applicable device/platform via which you
            access the Services and applicable law: all purchases are final, and
            no refunds will be made or returns accepted.
          </p>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="FEEDBACK OR SUGGESTIONS"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <p>
            Feedback and suggestions are great (thank you!) but at our
            discretion without responsibility/liability.You are welcome to give
            us feedback and suggestions to improve the Services - in such case
            you can contact us at{" "}
            <a className="underline" href="mailto:support@lovefromgames.com">
              support@lovefromgames.com
            </a>
            . We appreciate your feedback and suggestions, but we may choose not
            to use or accept them at our discretion. In any event the
            feedback/suggestions will be received by us without any obligations
            or liability to you.
          </p>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="WARRANTIES AND LIABILITY"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <p>
            We provide warranties (i.e. legally binding promises) about the
            Services, for example that we will take reasonable care regarding
            your use of the Services. We also explain a bit further how we are
            legally responsible to each other. We ask for certain legal
            protections from you (legally, this does not apply to EU users).
          </p>

          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>6.1 Our warranties.</li>
            <li>
              We represent and warrant that: (i) we have the right to enter into
              these TOS and to grant you the license to access and use the
              Services in section 2; (ii) we will take reasonable care regarding
              the Services and your use of it and (iii) we will use reasonable
              efforts to comply with applicable laws under these TOS.
            </li>
            <li>6.2 Your warranties to us</li>
            <li>
              You represent and warrant that you have the full power and ability
              to enter into these TOS and will follow fully its terms. You also
              represent and warrant that any User Generated Content, which you
              transmit via the Services does not infringe upon the intellectual
              property rights of any third party. You further represent and
              warrant that you will not use or contribute User Generated Content
              that is unlawful, tortious, defamatory, obscene, invasive of the
              privacy of another person, threatening, harassing, abusive,
              hateful or racist.
            </li>
            <li>6.3 Limitation of liability</li>
            <li>
              The following section does not apply to you if you are resident in
              the European Union or countries whose laws specifically prohibit
              the following liability limitations, but it does apply to you if
              you are resident in the USA.
            </li>
          </ul>

          <ul className="flex list-[upper-roman] flex-col gap-1 pl-16 lg:gap-2 lg:[&_li]:text-xl">
            <li>
              OUR DISCLAIMERS. EXCEPT AS WE HAVE SET OUT ELSEWHERE IN THESE TOS,
              LoveFrom Games AND ITS AFFILIATES, PARTNERS AND LICENSORS DISCLAIM
              ANY IMPLIED OR EXPRESS WARRANTIES OR REPRESENTATIONS REGARDING THE
              SERVICES. THIS INCLUDES WITHOUT LIMITATION ANY ALLEGATIONS OF: (I)
              NEGLIGENCE; OR
            </li>
            <li>
              LACK OF SATISFACTORY QUALITY, MERCHANTABILITY OR FITNESS FOR
              PURPOSE; OR
            </li>
            <li>
              THE EXISTENCE OF ANY FAULTS OR ERRORS; OR (IV) INFRINGEMENT OF ANY
              THIRD PARTY INTELLECTUAL PROPERTY RIGHTS. THE SERVICES ARE
              OTHERWISE PROVIDED TO YOU ON AN &quot;AS IS&quot;, “AS AVAILABLE”
              BASIS WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND, EXPRESS
              OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE
              DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, WHICH MIGHT APPLY TO
              THE SERVICES, INCLUDING WITHOUT LIMITATION: IMPLIED WARRANTIES OF
              TITLE, NON-INFRINGEMENT, MERCHANTABILITY, SATISFACTORY QUALITY,
              FITNESS FOR A PARTICULAR PURPOSE, ANY WARRANTIES THAT MAY ARISE
              FROM COURSE OF DEALING OR COURSE OF PERFORMANCE OR USAGE OF TRADE,
              FREEDOM FROM VIRUSES OR ERRORS OR DEFECTS, AND/OR ANY WARRANTIES
              AS TO THE ACCURACY, LEGALITY, RELIABILITY OR QUALITY OF ANY
              CONTENT OR INFORMATION CONTAINED WITHIN THE SERVICES. WE DO NOT
              WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE,
              THAT DEFECTS WILL BE CORRECTED, OR THAT THE GAME WILL BE FREE OF
              VIRUSES OR OTHER HARMFUL COMPONENTS.
            </li>
            <li>
              OUR LIABILITY LIMITATION. TO THE MAXIMUM EXTENT PERMITTED BY
              APPLICABLE LAW, LoveFrom Games, ITS AFFILIATES, PARTNERS AND
              LICENSORS SHALL NOT BE LIABLE FOR ANY LOSS, DAMAGE OR HARM OF ANY
              KIND ARISING FROM THE USE OR INABILITY TO USE OR &apos;LOSS&apos;
              RELATING TO THE SERVICES. LoveFrom Games, ITS AFFILIATES, PARTNERS
              AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL,
              INCIDENTAL, SPECIAL, PUNITIVE OR EXEMPLARY DAMAGES OR ANY OTHER
              DAMAGES ARISING OUT OF OR CONNECTED WITH THE SAME. THIS INCLUDES
              IF YOU SUFFER DAMAGE BECAUSE YOU CANNOT USE THEM (EITHER
              TEMPORARILY OR PERMANENTLY). NONE OF THE ABOVE WILL BE AFFECTED IN
              ANY WAY EVEN IF LoveFrom Games OR ITS AFFILIATES, PARTNERS OR
              LICENSORS ARE AT FAULT (WHETHER THROUGH NEGLIGENCE, BREACH OF
              CONTRACT, BREACH OF WARRANTY OR STRICT LIABILITY) AND EVEN IF YOU
              OR WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </li>
            <li>
              OUR LIABILITY CAP. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
              LAW, IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU IN CONNECTION
              WITH THE SERVICES OR THESE TOS EXCEED AN AMOUNT EQUAL TO THE
              AMOUNT YOU HAVE ACTUALLY PAID US (IF ANY) IN CONNECTION WITH THE
              MATTERS UNDERLYING ANY CLAIM(S).
            </li>
            <li>
              YOUR INDEMNITY TO US. YOU AGREE TO INDEMNIFY AND HOLD HARMLESS ON
              DEMAND LoveFrom Games, ITS AFFILIATES, LICENSORS AND PARTNERS FROM
              ALL LIABILITIES, CLAIMS AND EXPENSES, INCLUDING LEGAL FEES, IN
              CONNECTION WITH: (1) ANY ALLEGED OR ACTUAL BREACH OF THESE TOS;
              (2) THE USE OF THE SERVICES BY YOU OR ANY PERSON ON YOUR BEHALF;
              (3) INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS OR OTHER PROPERTY
              OF LoveFrom Games; AND/OR (4) YOUR USER GENERATED CONTENT. IF
              CLAIMS ARE BROUGHT AGAINST US, THEN YOU WILL COOPERATE FULLY WITH
              US AND WE RESERVE THE RIGHT TO TAKE OVER THEIR DEFENCE. YOU WILL
              NOT SETTLE ANY SUCH CLAIMS WITHOUT OUR PRIOR WRITTEN CONSENT.
            </li>
            <li>
              INJUNCTIVE RELIEF. YOU AGREE THAT ANY LOSS, DAMAGE OR HARM YOU
              SUFFER ARE NOT IRREPARABLE OR SUFFICIENT, AND OTHER REMEDIES WILL
              BE ADEQUATE, SUCH THAT YOU ARE NOT ENTITLED TO INJUNCTIVE OR OTHER
              EQUITABLE RELIEF AGAINST US.
            </li>
            <li>
              Residents of California. If you reside in the state of California
              you are entitled to the following specific consumer
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="TERMINATION"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />

          <p>
            You can terminate these TOS by stopping the access of use of the
            Services. We may cancel or suspend (temporarily or permanently) your
            access to any and/or all of the Services if you seriously breach
            these TOS.
          </p>

          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              7.1. When and how can you terminate these TOS? You can terminate
              these TOS by permanently stopping the access and use of the
              Services at any time. Termination will not affect already existing
              rights or obligations of us or you.
            </li>
            <li>
              7.2. We may cancel or suspend (temporarily or permanently) your
              access to any and/or all of the Services if you materially breach
              these TOS, which includes but is not limited to a breach of these
              TOS which is serious and/or which could cause real harm to the
              Services, other Services&apos; users, LoveFrom Games or other
              matters governed under these TOS. In particular, it applies to the
              Services rules we specify in section 4 above (for example, no
              cheating or account misuse). If we cancel or suspend your account
              in this way, we will use reasonable efforts to explain why we have
              done this and what (if anything) you can do as a result.
              Cancellation or suspension will include you losing access to
              Virtual Goods and Virtual Currency. If we cancel or suspend your
              account under this section, then we will not have any obligations
              or liabilities to you at all.
            </li>
          </ul>
          <p>
            If LoveFrom Games decides itself to stop providing the Services
            permanently, then we will try to give you at least sixty (60)
            days&apos; notice by posting an update on the applicable website.
            After that time period, we will not have any future obligations or
            liabilities to you (this does not affect any pre- existing
            obligations or liabilities.
          </p>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="FORCE MAJEURE"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <p>
            If unforeseen events beyond your or our control take place, then
            neither of us will be liable to the other for any obligations which
            cannot be performed.
          </p>
          <p>
            8.1. Neither of us will be liable to the other regarding any
            performance, or non-performance, or delay, in whole or in part, due
            to Force Majeure.
          </p>
          <p>
            “Force Majeure” means any cause preventing a party from performing
            any or all of its obligations which arises from or is attributable
            to acts, events, omissions or accidents beyond the reasonable
            control of the party so prevented including strikes, lock-outs or
            other industrial disputes (other than any such dispute involving the
            workforce of the party so prevented), nuclear accident or acts of
            God, war or terrorist activity, riot, civil commotion, malicious
            damage (excluding malicious damage involving the employees of the
            affected party or its sub-contractors), compliance with any law or
            governmental order, rule, regulation or direction, industrial action
            by employees of any providers of electrical power, failure of
            technical facilities, hacking, denial of service or other IT attack,
            deployment of IT virus malware or similar technology, fire, flood,
            or storm or default of suppliers or sub-contractors.
          </p>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="GOVERNING LAW"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <p>
            Any legal questions / complaints / claims regarding these TOS are
            under Danish law and jurisdiction for users all around the world
            except for users residing in the USA, who are under California law
            and jurisdiction.
          </p>
          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              9.1. If you are resident in the European Union and elsewhere in
              the world (but not the USA):
            </li>
            <li>
              You and we agree that your use of the Services, and these TOS, and
              any issues arising out of them, will be governed by and
              interpreted according to the laws of Denmark and any dispute
              regarding it will be exclusively under the jurisdiction of the
              courts of Denmark. In any legal claim under these TOS, the side
              which wins will be entitled to its legal fees and expenses. This
              does not exclude any mandatorily applicable rules or remedies
              which would be available to you in a legal claim brought under the
              law of your EU Member State of residence.
            </li>
            <li>9.2. If you are resident in the USA:</li>
            <li>
              To the extent not covered by the Dispute Resolution and
              Arbitration language below, you and we agree that your use of the
              Services, and these TOS, and any issues arising out of them, will
              be deemed to be entered into in San Francisco, California and
              governed by and interpreted according to the laws of the State of
              California, USA (and, if applicable, US Federal law) without
              regard to choice of law principles. Any legal claim by you against
              LoveFrom Games, to the extent not covered by the Dispute
              Resolution and Arbitration language below, will be made
              exclusively in state or federal court located in San Francisco,
              California, which will have subject matter jurisdiction regarding
              the dispute between you and us and therefore we both consent to
              the exclusive jurisdiction of those courts. Moreover, you waive
              any rights to argue that the state and federal courts in San
              Francisco, California are an improper venue. In any legal claim
              under these TOS, the side who wins will be entitled to its legal
              fees and expenses.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="DISPUTE RESOLUTION AND BINDING ARBITRATION"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />

          <p>
            If you have any concerns or issues you can contact us at
            support@lovefrimgames.com. We hope we can resolve any complaints
            with you through informal dispute resolution.
          </p>

          <ul className="flex list-disc flex-col gap-1 pl-5 marker:text-xs lg:gap-2 lg:[&_li]:text-xl">
            <li>
              10.1. If you have concerns or issues with us, we hope we can
              resolve them quickly and amicably - you can contact us at
              support@lovefromgames.com. However, we recognize that occasionally
              there might be legal disputes which are not so easily resolved. In
              this section we explain what happens if there is a legal dispute.
            </li>
            <li>
              10.2. Informal dispute resolution: We and you both agree to make
              reasonable and good faith efforts to resolve any dispute between
              us informally. Normally we would suggest that this dispute
              resolution period lasts 30 days unless exceptional circumstances
              exist. If it is not resolved during this time, the next steps
              depend on where you live. If you are resident in the European
              Union, you may be entitled to submit a complaint through the
              Online Dispute Resolution Platform operated by the European
              Commission, details of which can be found at{" "}
              <Link
                href="https://consumer-redress.ec.europa.eu/site-relocation_en?event=main.home.chooseLanguage"
                className="underline"
              >
                https://ec.europa.eu/
              </Link>
            </li>
            <li>
              If we can&apos;t resolve a dispute with you informally, then this
              is what happens next.
            </li>
            <li>
              IMPORTANT: IF YOU LIVE IN THE USA, PLEASE READ THE FOLLOWING
              SECTIONS CAREFULLY AS IT REQUIRES YOU TO ARBITRATE DISPUTES
              BETWEEN US ON AN INDIVIDUAL BASIS.
            </li>
            <li>
              10.3. Dispute resolution next steps: if you live in the European
              Union or elsewhere in the world (but not the USA):
            </li>
            <li>
              You and we have the legal right to commence legal claims against
              each other if we consider it necessary. If you bring a claim
              against LoveFrom Games, you should address it to
              <Link
                href="mailto:support@lovefromgames.com"
                className="underline"
              >
                support@lovefromgames.com
              </Link>
              .
            </li>
            <li>
              10.4. Dispute resolution next steps: if you live in the USA:
            </li>
            <li>
              We and you agree to resolve all disputes and claims between us on
              an individual basis through binding arbitration, including without
              limitation any claims arising from or relating to these TOS, any
              part of the relationship between you and us, or your use of the
              Services, except as set forth under “Exceptions to Informal
              Dispute Resolution and Agreement to Arbitrate” below. The US
              Federal Arbitration Act and federal arbitration law applies to
              these TOS.
            </li>
            <li>
              Arbitration&quot; is a consensual dispute resolution process where
              both sides present their case to a neutral arbitrator rather than
              a judge or jury. Arbitration is less formal than court litigation
              and review of an arbitrator&apos;s decision by a court is limited.
              To be clear: by choosing arbitration you and we give up the right
              to have any dispute between us heard in court before a judge
              and/or jury.
            </li>
            <li>
              Individual Arbitration Only: You and we agree that arbitration
              will be conducted only on an individual basis and not as a class,
              consolidated or representative arbitration.
            </li>
            <li>(b) How to start an arbitration:</li>
            <li>
              Either of us can commence arbitration by filing an arbitration
              demand with the AAA that describes the claim and desired remedy.
              Notice sent to LoveFrom Games should be sent by mail and by email.
              You or LoveFrom Games may bring an arbitration at any American
              Arbitration Association (“AAA”) location within the United States.
            </li>
            <li>(c) The rules for the arbitration:</li>
            <li>
              The arbitration will be governed by the AAA under its Commercial
              Arbitration Rules and, where applicable, its Consumer Arbitration
              Rules (available at http://www.adr.org), as modified by these TOS.
              The arbitrator will be bound by these TOS.
            </li>
            <li>
              The arbitration shall be conducted in English by a single
              arbitrator with substantial experience in intellectual property
              and commercial contract disputes, selected pursuant to AAA rules.
              The arbitration hearing may be conducted through the submission of
              documents, by phone, or in person, and must commence within thirty
              (30) days from the appointment of the arbitrator, unless otherwise
              agreed by you and LoveFrom Games. Judgment upon an award rendered
              by the arbitrator may be entered in any court having jurisdiction
              or application may be made to such court for judicial acceptance
              of any award and an order of enforcement, as appropriate.
            </li>
            <li>
              10.5. Exceptions to Informal Dispute Resolution and Agreement to
              Arbitrate
            </li>
            <li>
              The dispute resolution and arbitration requirements do not apply
              to claims or disputes that relate to claims of intellectual
              property rights infringement or claims of LoveFrom Games use,
              piracy, theft or misappropriation.
            </li>
            <li>10.6. Limitation on Claims</li>
            <li>
              You and LoveFrom Games agree that, regardless of any statute or
              law to the contrary, any claim arising out of or related to the
              Services must be made within one (1) year after the claim arose;
              otherwise, such claim is permanently barred. You agree that these
              dispute resolution and binding arbitration provisions will survive
              any termination of your account or THE SERVICES.
            </li>
            <li>
              If you live in the USA or the rest of the world (but not the EU),
              you and we agree not to bring any class action or similar
              collective legal action against each other. We will resolve legal
              disputes with each other through the process outlined above.
            </li>
            <li>10.7. Waiver of collective action remedies:</li>
            <li>
              To the maximum extent permitted by the national or state law
              applicable, you and we agree not under any circumstances to bring
              or participate in a class or representative action, private
              attorney general action or collective arbitration. That means, to
              the full extent permitted by law, (1) no arbitration shall be
              joined with any other; (2) there is no right or authority for any
              dispute to be arbitrated on a class-wide basis or to utilize class
              action procedures; and (3) there is no right or authority for any
              dispute to be brought in a purported representative capacity on
              behalf of the general public or any other persons.
            </li>
          </ul>
          <p>
            If the previous paragraph is found illegal or unenforceable for any
            reason, you and LoveFrom Games agree that any class, representative
            private attorney general action claim or dispute will be resolved in
            court.
          </p>
        </section>
        <section className="flex flex-col gap-5 lg:[&_p]:text-xl">
          <SectionHeader
            title="OTHER LEGAL MATTERS"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <p>
            This section sets out a few additional, hopefully self-explanatory
            rules about how these TOS works legally. For example, these TOS is
            just between you and us, we might be required to comply with law
            enforcement requests etc.
          </p>

          <ul className="flex list-[upper-roman] flex-col gap-1 pl-16 lg:gap-2 lg:[&_li]:text-xl">
            <li>
              If any part of these TOS is found not to be legally enforceable,
              this will not affect any other part of it;
            </li>
            <li>
              These TOS governs our relationship with you (and vice versa). It
              does not create any rights for anyone else;
            </li>
            <li>
              Please remember that we are subject to various laws and we may be
              required to comply with law enforcement or other legal
              requirements, including import/export controls;
            </li>
            <li>
              You and we agree that the UN Convention on Contracts for the
              International Sale of Goods does not apply to the Services or
              these TOS;
            </li>
            <li>
              We can assign, subcontract or transfer these TOS to a third party
              or another member of our group if necessary, for the support of
              the Services, as part of any reorganisation or merger or for other
              business reasons. We will notify you if this happens;
            </li>
            <li>
              No failure or delay by us or you to exercise any right or remedy
              provided under these TOS or by law will constitute a waiver of
              that or any other right or remedy, nor will it preclude or
              restrict the further exercise of that or any other right or
              remedy. No single or partial exercise of such right or remedy by
              us or you will preclude or restrict the further exercise of that
              or any other right or remedy; and
            </li>
            <li>
              These TOS does not create any exclusive relationship between us
              nor any partnership, joint venture, employment or agency.
            </li>
          </ul>
        </section>
      </div>
      <SliderButton />
    </main>
  );
}
