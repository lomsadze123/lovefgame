import { SectionHeader } from "@/components";

export default function Terms() {
  return (
    <main className="mt-9 w-full md:mt-15 lg:mb-15">
      <SectionHeader
        title="Terms of Service"
        subtitle="By using our services, you agree to these terms."
        date="Last updated: 21 April 2026"
        variant="page-title"
      />

      <div className="mx-auto mt-12 max-w-340 px-7 font-light">
        <section>
          <SectionHeader
            title="A quick summary"
            variant="centered"
            className="max-w-[83dvw] font-medium md:max-w-full"
          />
          <ul className="mt-5 flex list-decimal flex-col gap-5 pl-5 lg:pl-12 lg:[&_li]:text-xl">
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
          <p className="my-10 lg:text-xl">
            This Terms of Service (or “TOS” for short) apply to you and LoveFrom
            Games regarding your access and use of LoveFrom Games Services
            (which we explain below). Because we know legal wording is not much
            fun, we have included a short and informal summary of each section
            (but the full version is the legally binding one).
          </p>
        </section>
        <section className="mt-12 lg:[&_p]:text-xl">
          <SectionHeader
            title="ABOUT THESE TOS"
            variant="centered"
            className="max-w-[83dvw] font-medium"
          />
          <p className="mt-5">
            Agreeing to these TOS is a precondition for accessing and using our
            Services. If you accept these TOS, you represent that you are age 13
            or older (or under 16 in certain jurisdictions in the European
            Union). If you do not agree to these TOS, you may not use or
            otherwise access our Services.
          </p>
          <p className="my-5">
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
              What do these TOS apply to? ? These TOS apply to our Services,
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
          </ul>
        </section>
      </div>
    </main>
  );
}
