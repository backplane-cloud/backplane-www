import Layout from "@theme/Layout";

const about = () => {
  return (
    <Layout>
      <div
        style={{
          width: "1000px",
          margin: "0, auto",
          padding: "20px",
          margin: "50px",
          //   background: "blue",
          alignSelf: "center",
        }}
      >
        <h1>About</h1>

        <p>
          The Backplane project began in April 2023, originally titled
          'Skybridge'. The goal was to build a Cloud Management Platform that
          focused on governance of Access, Cost and Policies across different
          Cloud Service Providers. Unfortunately, the domains for Skybridge were
          all taken, or available for a substantial premium in the tens of
          thousands of pounds!. However, the idea was there, and all I needed
          was a good name for the Project.
        </p>

        <h2>Backplane was born!</h2>

        <p>
          Backplane.cloud was available, as well as Backplane.dev and
          getbackplane.io. So, I proceeded to register those domain names for my
          new project.
        </p>

        <p>
          The goal was to build a full stack application. I began with building
          our the UI with React, but realised I was getting bogged down with UI
          concerns and it would be more productive to build the API engine first
          and use Postman for the interim. This allowed me to develop as a
          faster speed and not get drawn into aesthetic and layout issues. As I
          considered what to develop the REST API in, it occurred to me that
          given Node.JS runs JavaScript at the backend and I had invested time
          learning JS for the frontend, it made perfect sense to build the REST
          API with Node.JS and Express.
        </p>

        <h2>CLI</h2>

        <p>
          As I built out the REST API, I used Postman to test all the CRUD
          operations. Then it occurred to me, wouldn't it be great to build a
          CLI in tamdem with complete parity. This would open the doors for
          cloud engineers and platform engineers to leverage Backplane's
          functionality with their own existing UIs.
        </p>

        <p>
          With the API and CLI now built, I took to build-out the frontend in
          React.
        </p>

        <h2>Open Source</h2>

        <p>
          Parallel to my development activities, something was happening in the
          cloud native space concerning BSL licensing of Terraform and a fork
          called Open Tofu. Whilst Backplane was to some extent a learning
          project, and possibly a resume project, it occurred to me, I really
          want to do something more given the years I'd spent developing subject
          matter expertise in Cloud governance. As a certified Azure and GCP
          solution architect and with a slew of Cloud certifications under my
          belt, it made sense to bring that expertise to Backplane and give it
          back to the industry. This would make the last 5 years working within
          enterprise cloud enablement, adoption and governance have some meaning
          that the dissapointing redundancy position I was put into.
        </p>

        <p>
          Technology is something I am passionate about, and people are
          intertwined elements of technology, and as an industry that 'values'
          the benefits technology brings, industry tends to take a dismall view
          on the expertise required to be skilled in the ever changing
          technology landscape. Engineers were slowly being sidelined in favour
          of Developers, who would of course pick up the Operational workload
          since 'DevOps' and IaC made it a cinch! Alas, like in a good football
          team you need all types of players, and in a good formation, the same
          is true with tech teams. You need engineers, and you need developers,
          and all the technical specialists in-between. Backplane is built by an
          engineer, for engineers, to, enable Developers to build in the Cloud.
        </p>

        <h2>The Future</h2>
        <p>
          The project will be maintained as an Open Source project both for the
          API, CLI and forthcoming UI. Backplane Software Ltd. is a startup that
          will specialise in developing feature add-ons/extension for Backplane,
          that enhances and adds greater value for enterprise adoption and
          enablement. Backplane Software is partnered with Microsoft for
          Startups. Whilst I have bootstrapped Backplane this far, to build the
          UI and Roadmap features will require capital investment.
        </p>

        <h2>The vision</h2>
        <p>
          I would like to see Backplane help organisations large and small with
          their cloud native transformations, and provide a sound governance
          base for multi cloud adoption. Upon which custom internal development
          platforms and cloud management platforms can plug into. The Backplane
          API will remain an abstraction API and essentially perform an
          in-flight ETL on cost, access and policy data, so there is a
          Product-lens on cloud workloads.
        </p>

        <p>
          If nothing else, I have enjoyed full stack developing Backplane, added
          MERN skills under my belt, and made a small contribution to Cloud
          Governance
        </p>
      </div>
    </Layout>
  );
};

export default about;
