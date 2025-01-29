import React from 'react'

const StyledResume = () => (
  
  <div className="max-w-4xl mx-auto p-8 bg-white">
    {/* Header with subtle accent bar */}
    <header className="mb-8 relative">
      <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
      <div className="pl-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Victor J. Torres</h1>
        <div className="text-lg text-gray-600 mb-4">Scottsdale, Arizona</div>
        <div className="text-gray-600">victorres11@gmail.com | 415.233.0489</div>
        <p className="mt-4 text-lg text-gray-700 italic">
          Technical leader specializing in automation, data analytics, and process optimization with demonstrated experience improving football operations
        </p>
      </div>
    </header>

    <div className="bg-red-500">
    <h1 className="text-white">Test Background Color</h1>
  </div>

    {/* Professional Experience Section */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
        <div className="w-2 h-6 bg-blue-600 mr-3" />
        Professional Experience
      </h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical & Operations Experience</h3>
        
        {/* Company sections with hover effect */}
        <div className="space-y-8">
          {/* Venable Sports Group */}
          <div className="p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-md">
            <div className="flex justify-between items-baseline mb-3">
              <div className="text-lg font-medium text-gray-800">Venable Sports Group</div>
              <div className="text-gray-600">Technical Consultant | 2024 - Present</div>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Supported business launch through fundraising initiatives and strategic planning</li>
              <li>Developed automated CRM system for college football player tracking and recruitment</li>
              <li>Built data pipelines to automatically track transfer portal entries, high school recruits, and player commitments</li>
              <li>Implemented workflow automations using n8n.io and JavaScript, hosted on Render</li>
              <li>Created efficient system for managing and monitoring player movements across specified regions</li>
            </ul>
          </div>

          {/* Tento */}
          <div className="p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-md">
            <div className="flex justify-between items-baseline mb-3">
              <div className="text-lg font-medium text-gray-800">Tento</div>
              <div className="text-gray-600">Product Manager & Growth Engineer | Jan 2023 - Present</div>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Led architecture and development of new SaaS product from concept to launch, managing weekly sprints and developer team</li>
              <li>Designed and implemented serverless architecture using AWS Lambda and EventBridge for scalable product features</li>
              <li>Led migration from Salesforce-dependent architecture to custom in-house database solution, streamlining development workflows</li>
              <li>Built and managed Looker dashboards with Snowflake integration for business analytics</li>
              <li>Implemented and maintained marketing automation infrastructure</li>
              <li>Championed AI adoption across teams, integrating tools like Claude and WindSurf to optimize workflows and improve productivity</li>
            </ul>
          </div>

          {/* Cal Poly */}
          <div className="p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-md">
            <div className="flex justify-between items-baseline mb-3">
              <div className="text-lg font-medium text-gray-800">California Polytechnic State University</div>
              <div className="text-gray-600">Football Operations Consultant | Aug 2022 - Dec 2022</div>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Developed automated scouting data system that reduced report generation time from 8 hours to minutes</li>
              <li>Created custom reports for coordinators' game planning, improving operational efficiency</li>
              <li>Demonstrated ability to quickly understand and optimize football operations through technical solutions</li>
            </ul>
          </div>

          {/* Datadog */}
          <div className="p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-md">
            <div className="flex justify-between items-baseline mb-3">
              <div className="text-lg font-medium text-gray-800">Datadog</div>
              <div className="text-gray-600">Growth Engineer | Feb 2017 - Feb 2018</div>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Built high-performance ETL pipelines using Scala, Luigi, and Spark for processing large-scale datasets</li>
              <li>Developed complex data processing workflows using Jupyter notebooks for research whitepapers</li>
              <li>Managed and extended technical marketing infrastructure, including Marketo, Clearbit, and custom solutions</li>
            </ul>
          </div>

          {/* AdRoll */}
          <div className="p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-md">
            <div className="flex justify-between items-baseline mb-3">
              <div className="text-lg font-medium text-gray-800">AdRoll</div>
              <div className="text-gray-600">Software Engineer, Growth & Integrations | Sep 2012 - Feb 2017</div>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Led development of new web applications using AWS, Flask, Python, and ReactJS</li>
              <li>Developed e-commerce plugins (Shopify, Magento) enabling one-click integration with AdRoll services</li>
              <li>Designed and implemented customer onboarding optimization tools</li>
              <li>Built real-time analytics dashboards and data pipeline integrations</li>
              <li>Scaled from Operations to Technical Account Manager to Software Engineer</li>
            </ul>
          </div>

          {/* FoxGrowth */}
          <div className="p-6 bg-gray-50 rounded-lg transition duration-300 hover:shadow-md">
            <div className="flex justify-between items-baseline mb-3">
              <div className="text-lg font-medium text-gray-800">FoxGrowth</div>
              <div className="text-gray-600">Co-Founder, Growth Engineer | Nov 2017 - Present</div>
            </div>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Lead technical strategy and implementation for various growth initiatives across multiple companies</li>
              <li>Develop custom data platforms and automation solutions to optimize business processes</li>
              <li>Partner with organizations to implement scalable technical infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
        <div className="w-2 h-6 bg-blue-600 mr-3" />
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium mb-2 text-gray-800">Languages & Frameworks</div>
          <div className="text-gray-700">Python, JavaScript, ReactJS, Scala</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium mb-2 text-gray-800">Data & Analytics</div>
          <div className="text-gray-700">ETL Pipeline Development, Data Warehousing, Business Intelligence</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium mb-2 text-gray-800">Cloud & Infrastructure</div>
          <div className="text-gray-700">AWS (Lambda, EventBridge, Elastic Beanstalk, SNS/S3)</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium mb-2 text-gray-800">Database Systems</div>
          <div className="text-gray-700">PostgreSQL, HBase, Snowflake</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium mb-2 text-gray-800">AI & Automation</div>
          <div className="text-gray-700">Claude, WindSurf, Workflow Optimization, AI Integration</div>
        </div>
      </div>
    </section>

    {/* Board & Advisory Roles Section */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
        <div className="w-2 h-6 bg-blue-600 mr-3" />
        Board & Advisory Roles
      </h2>
      <div className="space-y-6">
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="text-lg font-medium text-gray-800 mb-2">The Olympic Club Foundation</div>
          <div className="text-gray-600 mb-3">Board Member | 2021 - Present</div>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Developed surveys and data collection tools supporting fundraising efforts</li>
            <li>Increased program involvement through constituent insights</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="text-lg font-medium text-gray-800 mb-2">LENDonate, Inc.</div>
          <div className="text-gray-600">Advisor | 2020 - Present</div>
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-100 flex items-center">
        <div className="w-2 h-6 bg-blue-600 mr-3" />
        Education & Languages
      </h2>
      <div className="p-6 bg-gray-50 rounded-lg">
        <div className="mb-4">
          <div className="text-lg font-medium text-gray-800">Arizona State University - W.P. Carey School of Business</div>
          <div className="text-gray-700">BS, Management | 2007 - 2009</div>
        </div>
        <div>
          <div className="font-medium text-gray-800 mb-2">Languages</div>
          <div className="text-gray-700">English (Native), Spanish (Professional), Brazilian Portuguese (Professional)</div>
        </div>
      </div>
    </section>
  </div>
);

export default StyledResume;