import { SectionHeader } from "@/components";

export default function PrivacyPage() {
  return (
    <main className="mt-9 w-full md:mt-15 lg:mb-15 lg:[&_p]:text-xl">
      <SectionHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        date="Last updated: 21 April 2026"
        variant="page-title"
      />

      <div className="mx-auto mt-12 flex max-w-340 flex-col gap-10 px-7">
        <section className="flex flex-col gap-4 font-light">
          <p>
            This Privacy Policy tells you what you need to know about the
            information we collect about you, as well as how and why we collect
            it. This information is known as personal data.
          </p>
          <p>
            Mainly, we collect a little bit of personal data about you and your
            device in order to make our games and services available to you. If
            we didn&apos;t collect some information, then all of your progress
            in our games would be lost every time you exit!
          </p>
          <p>
            If you are 16 or over, we will ask for your consent to send your
            targeted advertising. You can choose to give us this consent or not.
            It is up to you. And whatever you choose, it will have no bearing on
            your ability to enjoy our games. If you are under-16 years of age,
            we will never send you targeted advertising.
          </p>
          <p>
            If you have any questions about how we use your personal data or if
            you wish to exercise your rights, please get in touch:{" "}
            <a className="underline" href="#">
              privacy@lovefromgames.com
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-4 font-light">
          <SectionHeader
            title="Introduction"
            variant="centered"
            className="font-medium [&_h3]:text-center md:[&_h3]:text-left [&>div]:max-w-[70dvw] md:[&>div]:max-w-full"
          />

          <p>
            At LoveFrom Games Aps (“LoveFrom Games” or &quot;we&quot; / “our”)
            data protection and confidentiality is a high priority.
          </p>

          <p>
            This Privacy Policy explains how your personal data is collected,
            shared and used by LoveFrom Games and how you can exercise your data
            protection rights. This Privacy Policy applies to personal data
            (also referred to as personal information) that we collect when you
            use our mobile game applications, forums, websites and other online
            products and services (collectively, the “Services”) or when you
            otherwise interact with us.
          </p>

          <p>
            LoveFrom Games is the controller of your personal data. This is a
            legal term and means that LoveFrom Games is responsible for
            determining the means and purposes of processing your personal data.
          </p>

          <p>
            We may amend and/or update this Privacy Policy from time to time by
            posting a new version in response to changing legal, technical or
            business reasons and developments. If we make material changes, we
            will notify you by revising the date at the top of the notice and,
            depending on the specific amendments, we may provide you with
            additional notice. We encourage you to review the Privacy Policy
            whenever you access our Services to stay informed about our
            information practices and the ways you can help protect your
            privacy. Your continued use of the Services shall mean your
            acceptance of the changes to this Privacy Policy.
          </p>
        </section>

        <section className="flex flex-col gap-4 font-light">
          <SectionHeader
            title="Information we collect"
            className="gap-5 font-medium [&_h3]:text-center [&_h3]:text-2xl md:[&_h3]:text-left [&>div]:mx-auto [&>div]:h-px [&>div]:max-w-[70dvw] md:[&>div]:max-w-full"
          />

          <p>
            We collect information you provide to us, such as when you
            participate in a contest and promotion, communicate with us via
            third-party social media sites, request customer support, send us an
            email or otherwise interact with us. The types of information we may
            collect about you include your name, social networking screen names
            or IDs, email address and any other information you choose to
            provide.We also collect the following information:
          </p>

          <ul className="list-disc pl-5 marker:text-xs lg:space-y-1 lg:[&_li]:text-xl">
            <li>
              Age: when you download our game, we collect your age as indicated
              by you.
            </li>
            <li>
              Log Information: about your use of our Services, including the
              type of browser you use, access times, pages viewed, your IP
              address, and the page you visited before navigating to our
              Services.
            </li>
            <li>
              Device information: about the device you use to access our
              Services, including information about the device&apos;s type,
              software and hardware, Media Access Control (“MAC”) address, and
              other unique device identifiers (such as Device ID and Advertising
              ID), device token, mobile network information, and time zone.
            </li>
            <li>
              Location information: We collect location information in order to
              comply with legislation and policies that apply to your area.
              However, neither we nor our partners collect location information
              more granular than city level without your explicit consent.
            </li>
            <li>
              Location information: We collect location information in order to
              comply with legislation and policies that apply to your area.
              However, neither we nor our partners collect location information
              more granular than city level without your explicit consent.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
