export type projectDataObject = {
  imagePosition: "left" | "right";
  title: string;
  sourceLink: string;
  objectiveAndImpact: string;
  features?: string[];
  description?: string;
  toolsOrFramework: string[];
};

export const bugReport: projectDataObject = {
  imagePosition: "left",
  title: "Bug Report Application",
  sourceLink: "https://github.com/ghiffaralfin/pbl302",
  objectiveAndImpact:
    "This project aims to create a bug report application for the State Polytechnic of Batam, allowing academic members to report bugs in institution-made apps directly. Our goal is to make bug reporting more efficient and improve user experience within the institution's digital environment. Through teamwork, we've developed a solution that fosters smooth communication between users and developers.",
  features: [
    "Improve bug reporting with a dynamic dashboard that shows analytics on report quantity and types, categorized by severity levels over specified time periods.",
    "Simplify the reporting process by submitting bug reports with assigned severity levels. Access useful features like editing, deleting, downloading, and an overview to explore all reports from the academic community.",
    "Enhance bug management by incorporating a risk calculator to systematically assess bug severity. Also, use the CVE discovery function to gain insights into potential vulnerabilities.",
  ],
  toolsOrFramework: ["Next.js", "Prisma", "MongoDB Atlas", "Socket.IO"],
};

export const dbSec: projectDataObject = {
  imagePosition: "right",
  title: "Database Encryption Performance Test & SSL Installation Report",
  sourceLink:
    "https://drive.google.com/file/d/1BPOF7GCwQ1wm2NNlOruSedSPK25Fnx8N/view?usp=sharing",
  objectiveAndImpact:
    "The project aims to generate reports by testing different encryption methods for a database, assessing their performance and comparing effectiveness. Through this effort, valuable insights into the performance and comparative analysis of these methods have been gained, aiding informed decision-making for selecting encryption methods and ultimately strengthening data security measures.",
  description:
    "Conducted a comprehensive study on various encryption techniques for databases, focusing on the utilization of SSH and SSL. The study involved comparing and assessing the performance of each method, starting from non-encrypted approaches to the implementation of SSH and SSL. To carry out these evaluations, I utilized Kali Linux for packet sniffing and receiving, alongside Ubuntu Server as the database server. Performance assessments were conducted, examining CPU usage and conducting stress tests on queries. Additionally, I included excerpts from Wireshark packet sniffer analysis to provide insights into encryption protocols.",
  toolsOrFramework: ["SQL MariaDB", "Kali Linux", "Ubuntu Server", "Wireshark"],
};

export const aesrsa: projectDataObject = {
  imagePosition: "left",
  title: "AES-RSA Encryption Application",
  sourceLink: "https://github.com/kosanjaya/ngampus",
  objectiveAndImpact:
    "The project seeks to create a simple application for AES RSA encryption, using programming languages to combine symmetric and asymmetric encryption methods. Its goal is to understand and apply encryption best practices. This effort produces a practical tool showcasing the integration of both encryption methods in programming, enhancing understanding and providing hands-on experience in data security practices",
  description:
    "The creation of an AES RSA encryption application is undertaken, developed using the Python programming language and accessed through a customized tkinter GUI. Two encryption methods are offered by this application, both capable of encrypting files. Ideally, one method is used for encrypting text content, while the other is employed for encrypting the key utilized by the previous method. The symmetric encryption method, AES, secures the textual content of a file, while RSA encryption is employed to secure the key used by the AES encryption",
  toolsOrFramework: ["Python"],
};

export const riskAssessment: projectDataObject = {
  imagePosition: "right",
  title:
    "Information Security Risk Management Report on SOC Facility of Batam State Polytechnic",
  sourceLink:
    "https://drive.google.com/drive/folders/1A-lZ0TsZiAPTntbjFy6RZ6xiq6fTTBuR?usp=sharing",
  objectiveAndImpact:
    "The project's main focus is to create a report on security risks at the SOC facility in the State Polytechnic of Batam. It aims to find and analyze risks and suggest ways to reduce them, especially concerning digital assets. As a result of this project, a detailed report has been made, giving valuable information on risk assessment and how to deal with risks. This report helps make informed decisions to better protect digital assets and improve overall security at the facility.",
  description:
    "The preparation and compilation of the information security risk management report for the SOC facility at Batam State Polytechnic are conducted using the ISO 27005 framework. . This report is structured into four sections: firstly, identifying risks to current digital assets; secondly, conducting qualitative risk assessment using predefined risk values; thirdly, visualizing risks through a matrix based on severity and likelihood values; and finally, implementing risk mitigation steps through appropriate risk treatment measures.",
  toolsOrFramework: ["ISO 27005"],
};

export const ddosApp: projectDataObject = {
  imagePosition: "left",
  title: "DDOS Script Attack Application",
  sourceLink: "https://github.com/ghiffaralfin/ngampus",
  objectiveAndImpact:
    "The project aims to create an app that can virtually launch DDoS attacks on internal networks using different interfaces. It's meant to study various DDoS attack methods like SYN Flood, UDP Flood, and Slowloris. By doing this, it helps us understand how these attacks work and their effects, which in turn helps improve network security by finding weaknesses and figuring out how to defend against them better.",
  features: [
    "The program is developed with three different user interfaces: a web-based interface utilizing Python Flask for the backend, a graphical user interface (GUI) built with a custom Python library Tkinter, and a command-line interface (CLI).",
    "The primary code is scripted in Python, incorporating three types of attacks: Syn flood, UDP flood, and Slowloris.",
    "GNS3 software serves as the platform for simulating DDoS attacks in a virtual network environment.",
  ],
  toolsOrFramework: [
    "Next.js",
    "Tailwind CSS",
    "Python",
    "GNS3",
    "Kali Linux",
    "Wireshark",
  ],
};
