import React from "react";

const Career = () => {
  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Career Opportunities</h1>
      <p className="mb-3">
        Are you passionate about journalism, writing, or digital media? Join our
        dynamic team at the Online News Portal. We are always looking for
        talented and enthusiastic individuals to help shape the future of news.
      </p>
      <h2 className="text-xl font-semibold mb-2">Current Openings:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>News Reporter – Remote</li>
        <li>Content Writer – Full-time</li>
        <li>Video Editor – Part-time</li>
        <li>Social Media Manager – Contract</li>
      </ul>
      <p>
        If you’re interested, please send your resume and portfolio to{" "}
        <a
          href="mailto:careers@onlinenews.com"
          className="text-blue-600 underline"
        >
          dragon@news.com
        </a>
        .
      </p>
    </div>
  );
};

export default Career;
