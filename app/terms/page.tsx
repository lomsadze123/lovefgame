import { SectionHeader } from "@/components";

export default function Terms() {
  return (
    <main>
      <SectionHeader
        title="Terms of Service"
        subtitle="By using our services, you agree to these terms."
        date="Last updated: 21 April 2026"
        className="[&_h3]:text-5xl [&_h3]:font-bold gap-[0.95rem] [&>div]:h-[0.63rem] [&>*:not(:last-child)]:px-7"
      />

      <section className="px-7 mt-12 font-light">
        <SectionHeader
          title="A quick summary"
          className="[&>div]:h-px gap-5 [&_h3]:text-2xl max-w-[83dvw] [&>div]:mx-auto font-medium"
        />

        <ul className="list-decimal mt-5 pl-5 flex flex-col gap-5">
          <li>
            These are the legally binding terms of services (“TOS”) for LoveFrom
            Games, websites, forums and other related services (collectively
            “Services”).
          </li>
          <li>
            You are given a personal license to use and/or play and access our
            Services it, but LoveFrom Games owns and continues to own all rights
            related to the Services.
          </li>
          <li>
            These TOS include your right to use the Services - the do&apos;s and
            the don&apos;ts.
          </li>
          <li>
            Depending on where you live, there are important terms regarding
            liability and dispute resolution (including mandatory arbitration
            and waiver of jury trial if you live in the USA).
          </li>
          <li>
            Use of the Services is also governed by our Privacy Policy available
            at https://lovefromgames.com/privacy/ (which explains what personal
            information we may collect and how we use and protect it).
          </li>
        </ul>

        <p className="my-10">
          This Terms of Service (or “TOS” for short) apply to you and LoveFrom
          Games regarding your access and use of LoveFrom Games Services (which
          we explain below). Because we know legal wording is not much fun, we
          have included a short and informal summary of each section (but the
          full version is the legally binding one).
        </p>
      </section>

      <section className="px-7 mt-12 font-light">
        <SectionHeader
          title="ABOUT THESE TOS"
          className="[&>div]:h-px gap-5 [&_h3]:text-2xl max-w-[83dvw] [&>div]:mx-auto font-medium"
        />

        <p className="mt-5">
          Agreeing to these TOS is a precondition for accessing and using our
          Services. If you accept these TOS, you represent that you are age 13
          or older (or under 16 in certain jurisdictions in the European Union).
          If you do not agree to these TOS, you may not use or otherwise access
          our Services.
        </p>

        <p className="my-5">
          LoveFrom Games may change and/or update these TOS at any time in
          response to changing legal, technical or business development reasons.
          Then we will put the changed/updated version online and we will take
          appropriate measures to inform you via our Services or otherwise. You
          agree to be bound by the updated TOS, by your continued access and/or
          use of the Services after said updates.
        </p>

        <ul className="flex flex-col gap-1 list-disc marker:text-xs pl-5">
          <li>
            1.1 What do these TOS apply to? ? These TOS apply to our Services,
            including (but not limited to) any interactive entertainment
            products, game key or code giving you access to it or any parts of
            it, Virtual Goods and Virtual Currency (defined below), any LoveFrom
            Games products and services related to our games, user accounts,
            customer and technical support, official forums, wikis, blogs and
            social media services.
          </li>
          <li>
            1.2 When do these TOS apply to you? These TOS will be binding once
            you access, download, install or use any of our Services. If you do
            not agree to these TOS, please do not use or access our Services.
          </li>
          <li>
            1.3 Will we ever change these TOS? We may change and/or update these
            TOS from time to time, for example to reflect changes in our
            Services or to reflect applicable laws. If we do, we will make the
            changed/updated TOS available online and make reasonable efforts to
            notify you of it. You are welcome to contact us at{" "}
            <a href="mailto:support@lovefromgames.com">
              support@lovefromgames.com
            </a>{" "}
            if you have specific questions about the changes. If you do not
            agree to those changes (regardless of whether you email us), then
            unfortunately you must cease using our Services: in order to make
            all of our Services work properly we need to have everyone using
            them under the same TOS instead of different people having different
            rules.
          </li>
          <li>
            1.4 Are there any other important documents you should read? Please
            also read our LoveFrom Games Privacy Policy available at{" "}
            <a href="https://lovefromgames.com/privacy/1.1">
              https://lovefromgames.com/privacy/1.1
            </a>{" "}
            What do these TOS apply to? ? These TOS apply to our Services,
            including (but not limited to) any interactive entertainment
            products, game key or code giving you access to it or any parts of
            it, Virtual Goods and Virtual Currency (defined below), any LoveFrom
            Games products and services related to our games, user accounts,
            customer and technical support, official forums, wikis, blogs and
            social media services.
          </li>
          <li>
            1.2 When do these TOS apply to you? These TOS will be binding once
            you access, download, install or use any of our Services. If you do
            not agree to these TOS, please do not use or access our Services.
          </li>
          <li>
            1.3 Will we ever change these TOS? We may change and/or update these
            TOS from time to time, for example to reflect changes in our
            Services or to reflect applicable laws. If we do, we will make the
            changed/updated TOS available online and make reasonable efforts to
            notify you of it. You are welcome to contact us at{" "}
            <a href="mailto:support@lovefromgames.com">
              support@lovefromgames.com
            </a>{" "}
            if you have specific questions about the changes. If you do not
            agree to those changes (regardless of whether you email us), then
            unfortunately you must cease using our Services: in order to make
            all of our Services work properly we need to have everyone using
            them under the same TOS instead of different people having different
            rules.
          </li>
        </ul>
      </section>
    </main>
  );
}
