import React, { useState, useEffect ,useRef} from 'react';
import './css/landing.css';

import correctSound  from './sounds/gdaa.mp3';

const questionsData = [
    {
        "lecture": 1,
        "id": 1,
        "question": "What is the estimated annual data production in the digital universe according to the 2014 IDC study?",
        "answers": {
            "a": "1.2 trillion GB",
            "b": "2.3 trillion GB",
            "c": "4.4 trillion GB"
        },
        "correct": "c",
        "reason": "The 2014 IDC study estimated 4.4 trillion GB of data produced annually."
    },
    {
        "lecture": 1,
        "id": 2,
        "question": "What type of data is organized in fixed fields within a record or file?",
        "answers": {
            "a": "Structured data",
            "b": "Unstructured data",
            "c": "Quasi-structured data"
        },
        "correct": "a",
        "reason": "Structured data is organized in fixed fields within a record or file."
    },
    {
        "lecture": 1,
        "id": 3,
        "question": "Which of the following is NOT an example of unstructured data?",
        "answers": {
            "a": "Text documents",
            "b": "E-mails",
            "c": "Relational databases"
        },
        "correct": "c",
        "reason": "Relational databases are examples of structured data."
    },
    {
        "lecture": 1,
        "id": 4,
        "question": "What is the key difference between data and information?",
        "answers": {
            "a": "Data is processed to become information",
            "b": "Information is raw facts",
            "c": "Data is always useful"
        },
        "correct": "a",
        "reason": "Data becomes useful information after processing."
    },
    {
        "lecture": 1,
        "id": 5,
        "question": "Which storage device uses magnetic storage?",
        "answers": {
            "a": "CD",
            "b": "Hard disk drive",
            "c": "SSD"
        },
        "correct": "b",
        "reason": "Hard disk drives use magnetic storage."
    },
    {
        "lecture": 1,
        "id": 6,
        "question": "What does SSD stand for?",
        "answers": {
            "a": "Solid State Drive",
            "b": "Secure Storage Device",
            "c": "Super Speed Drive"
        },
        "correct": "a",
        "reason": "SSD stands for Solid State Drive."
    },
    {
        "lecture": 1,
        "id": 7,
        "question": "What is a key characteristic of data centers regarding availability?",
        "answers": {
            "a": "Data centers must always be secure",
            "b": "Information must be available when required",
            "c": "Data centers must use the latest technology"
        },
        "correct": "b",
        "reason": "Availability means information must be accessible when needed."
    },
    {
        "lecture": 1,
        "id": 8,
        "question": "Which of the following is a management process in data centers?",
        "answers": {
            "a": "Marketing",
            "b": "Provisioning",
            "c": "Designing"
        },
        "correct": "b",
        "reason": "Provisioning is the process of allocating resources in data centers."
    },
    {
        "lecture": 1,
        "id": 9,
        "question": "What is the main purpose of monitoring in data center management?",
        "answers": {
            "a": "To plan future resource needs",
            "b": "To gather information on resource status",
            "c": "To handle customer queries"
        },
        "correct": "b",
        "reason": "Monitoring gathers information on various resource statuses."
    },
    {
        "lecture": 1,
        "id": 10,
        "question": "Which platform is associated with cloud computing, Big Data, mobile, and social technologies?",
        "answers": {
            "a": "First platform",
            "b": "Second platform",
            "c": "Third platform"
        },
        "correct": "c",
        "reason": "The third platform includes cloud, Big Data, mobile, and social technologies."
    },
    {
        "lecture": 1,
        "id": 11,
        "question": "What are mainframes primarily used for in a data center?",
        "answers": {
            "a": "Gaming",
            "b": "Hosting mission-critical applications and databases",
            "c": "Personal computing"
        },
        "correct": "b",
        "reason": "Mainframes are used for hosting mission-critical applications and databases."
    },
    {
        "lecture": 1,
        "id": 12,
        "question": "In the client-server model, what role do client devices typically play?",
        "answers": {
            "a": "Running the database management system",
            "b": "Providing an interface for users",
            "c": "Managing network resources"
        },
        "correct": "b",
        "reason": "Client devices provide an interface for users to interact with the server."
    },
    {
        "lecture": 1,
        "id": 13,
        "question": "What does IoT stand for?",
        "answers": {
            "a": "Internet of Transactions",
            "b": "Internet of Technology",
            "c": "Internet of Things"
        },
        "correct": "c",
        "reason": "IoT stands for Internet of Things."
    },
    {
        "lecture": 1,
        "id": 14,
        "question": "Which of the following is NOT a feature of enterprise-class storage systems?",
        "answers": {
            "a": "High scalability",
            "b": "Low reliability",
            "c": "High security"
        },
        "correct": "b",
        "reason": "Enterprise-class storage systems are designed for high reliability."
    },
    {
        "lecture": 1,
        "id": 15,
        "question": "What is the main benefit of processing data into information?",
        "answers": {
            "a": "It creates knowledge for decision-making",
            "b": "It reduces the amount of data",
            "c": "It deletes unnecessary data"
        },
        "correct": "a",
        "reason": "Processing data into information creates knowledge for decision-making."
    },
    {
        "lecture": 1,
        "id": 16,
        "question": "Which of the following is an example of semi-structured data?",
        "answers": {
            "a": "Spreadsheets",
            "b": "Photographs",
            "c": "Text documents"
        },
        "correct": "a",
        "reason": "Spreadsheets are examples of semi-structured data."
    },
    {
        "lecture": 1,
        "id": 17,
        "question": "What key characteristic of a data center involves ensuring data is stored and retrieved accurately?",
        "answers": {
            "a": "Availability",
            "b": "Data integrity",
            "c": "Scalability"
        },
        "correct": "b",
        "reason": "Data integrity ensures data is stored and retrieved exactly as it was received."
    },
    {
        "lecture": 1,
        "id": 18,
        "question": "Which platform emerged with the birth of the personal computer (PC) in the 1980s?",
        "answers": {
            "a": "First platform",
            "b": "Second platform",
            "c": "Third platform"
        },
        "correct": "b",
        "reason": "The second platform emerged with the personal computer (PC) in the 1980s."
    },
    {
        "lecture": 1,
        "id": 19,
        "question": "What is the main purpose of a data center?",
        "answers": {
            "a": "To house and manage IT infrastructure",
            "b": "To entertain users",
            "c": "To create art"
        },
        "correct": "a",
        "reason": "A data center houses and manages an organization's IT infrastructure."
    },
    {
        "lecture": 1,
        "id": 20,
        "question": "What does RDBMS stand for?",
        "answers": {
            "a": "Relational Database Management System",
            "b": "Remote Data Backup Management System",
            "c": "Reliable Data Broadcasting Management System"
        },
        "correct": "a",
        "reason": "RDBMS stands for Relational Database Management System."
    },
    {
        "lecture": 1,
        "id": 21,
        "question": "What is a key characteristic of green data centers?",
        "answers": {
            "a": "High energy consumption",
            "b": "Efficient energy use",
            "c": "No security measures"
        },
        "correct": "b",
        "reason": "Green data centers focus on efficient energy use."
    },
    {
        "lecture": 1,
        "id": 22,
        "question": "Which technology trend involves 'smart' devices exchanging data over the Internet?",
        "answers": {
            "a": "Big Data",
            "b": "Internet of Things (IoT)",
            "c": "Cloud computing"
        },
        "correct": "b",
        "reason": "The Internet of Things (IoT) involves smart devices exchanging data over the Internet."
    },
    {
        "lecture": 1,
        "id": 23,
        "question": "Which of the following is a flash-based storage device?",
        "answers": {
            "a": "DVD",
            "b": "USB thumb drive",
            "c": "Hard disk drive"
        },
        "correct": "b",
        "reason": "A USB thumb drive is a flash-based storage device."
    },
    {
        "lecture": 1,
        "id": 24,
        "question": "What does the monitoring process in a data center involve?",
        "answers": {
            "a": "Installing new equipment",
            "b": "Gathering information on resource status",
            "c": "Deleting old data"
        },
        "correct": "b",
        "reason": "Monitoring involves gathering information on resource status."
    },
    {
        "lecture": 1,
        "id": 25,
        "question": "Which of the following describes quasi-structured data?",
        "answers": {
            "a": "Organized in fixed fields",
            "b": "Textual data with erratic formats",
            "c": "No specific format"
        },
        "correct": "b",
        "reason": "Quasi-structured data has textual data with erratic formats."
    },
    {
        "lecture": 1,
        "id": 26,
        "question": "What is the primary purpose of a data center's support infrastructure?",
        "answers": {
            "a": "To provide entertainment",
            "b": "To ensure proper functioning of the data center",
            "c": "To create advertisements"
        },
        "correct": "b",
        "reason": "The support infrastructure ensures the proper functioning of the data center."
    },
    {
        "lecture": 1,
        "id": 27,
        "question": "What term refers to the ability of a data center to handle increased load by adding resources?",
        "answers": {
            "a": "Availability",
            "b": "Scalability",
            "c": "Data integrity"
        },
        "correct": "b",
        "reason": "Scalability refers to handling increased load by adding resources."
    },
    {
        "lecture": 1,
        "id": 28,
        "question": "Which storage device is typically used for backing up and archiving data?",
        "answers": {
            "a": "SSD",
            "b": "Magnetic tape",
            "c": "Flash drive"
        },
        "correct": "b",
        "reason": "Magnetic tapes are typically used for backing up and archiving data."
    },
    {
        "lecture": 1,
        "id": 29,
        "question": "What does EMC stand for in the context of this course?",
        "answers": {
            "a": "Electronics Management Corporation",
            "b": "Enterprise Management Corporation",
            "c": "EMC Corporation"
        },
        "correct": "c",
        "reason": "EMC stands for EMC Corporation."
    },
    {
        "lecture": 1,
        "id": 30,
        "question": "What is a common challenge associated with the client-server model?",
        "answers": {
            "a": "High initial cost",
            "b": "Creation of IT silos",
            "c": "Inability to scale"
        },
        "correct": "b",
        "reason": "The client-server model often leads to the creation of IT silos."
    },
    {
        "lecture": 1,
        "id": 31,
        "question": "According to the 2014 Digital Universe Study conducted by International Data Corporation (IDC), it is estimated that the digital universe produces approximately 4.4 trillion gigabytes (GB) of data annually.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The 2014 IDC study estimated 4.4 trillion GB of data produced annually."
    },
    {
        "lecture": 1,
        "id": 32,
        "question": "Organizations are increasingly implementing intelligent storage solutions.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Organizations are adopting intelligent storage solutions for efficiency and optimization."
    },
    {
        "lecture": 1,
        "id": 33,
        "question": "A collection of facts that is transmitted and stored in electronic form, and processed through software is called information.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A collection of facts in electronic form is called digital data."
    },
    {
        "lecture": 1,
        "id": 34,
        "question": "Data that has no inherent structure and is usually stored as different types of files.",
        "answers": {
            "a": "Unstructured",
            "b": "Structured",
            "c": "Semi-structured",
            "d": "Quasi-structured"
        },
        "correct": "a",
        "reason": "Unstructured data has no inherent structure and is stored as various file types."
    },
    {
        "lecture": 1,
        "id": 35,
        "question": "Textual data with erratic formats that can be formatted with effort and software tools.",
        "answers": {
            "a": "Unstructured",
            "b": "Structured",
            "c": "Semi-structured",
            "d": "Quasi-structured"
        },
        "correct": "d",
        "reason": "Quasi-structured data has erratic formats but can be formatted with effort."
    },
    {
        "lecture": 1,
        "id": 36,
        "question": "Textual data files with an apparent pattern, enabling analysis.",
        "answers": {
            "a": "Unstructured",
            "b": "Structured",
            "c": "Semi-structured",
            "d": "Quasi-structured"
        },
        "correct": "c",
        "reason": "Semi-structured data has an apparent pattern enabling analysis."
    },
    {
        "lecture": 1,
        "id": 37,
        "question": "Data having a defined data model, format, structure.",
        "answers": {
            "a": "Unstructured",
            "b": "Structured",
            "c": "Semi-structured",
            "d": "Quasi-structured"
        },
        "correct": "b",
        "reason": "Structured data has a defined data model, format, and structure."
    },
    {
        "lecture": 1,
        "id": 38,
        "question": "Clickstream data is semi-structured.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Clickstream data is quasi-structured."
    },
    {
        "lecture": 1,
        "id": 39,
        "question": "Spreadsheets are semi-structured.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Spreadsheets are examples of semi-structured data."
    },
    {
        "lecture": 1,
        "id": 40,
        "question": "Processed data that is presented in a specific context to enable useful interpretation and decision-making is called information.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Information is processed data that enables decision-making."
    },
    {
        "lecture": 1,
        "id": 41,
        "question": "When the annual sales data is processed into a sales report, it is:",
        "answers": {
            "a": "Digital Data",
            "b": "Program",
            "c": "Information",
            "d": "Data"
        },
        "correct": "c",
        "reason": "Processed sales data is information."
    },
    {
        "lecture": 1,
        "id": 42,
        "question": "HDD is an example of which type of storage device?",
        "answers": {
            "a": "Magnetic storage devices",
            "b": "SSD",
            "c": "CD",
            "d": "DVD"
        },
        "correct": "a",
        "reason": "HDD is a magnetic storage device."
    },
    {
        "lecture": 1,
        "id": 43,
        "question": "Solid state drive is an example of:",
        "answers": {
            "a": "Magnetic storage devices",
            "b": "Optical storage devices",
            "c": "Flash-based storage devices",
            "d": "Both A and C"
        },
        "correct": "c",
        "reason": "SSD is a flash-based storage device."
    },
    {
        "lecture": 1,
        "id": 44,
        "question": "Blu-ray disc, DVD, and CD are examples of:",
        "answers": {
            "a": "Magnetic storage devices",
            "b": "Optical storage devices",
            "c": "Flash-based storage devices",
            "d": "Both A and C"
        },
        "correct": "b",
        "reason": "Blu-ray, DVD, and CD are optical storage devices."
    },
    {
        "lecture": 1,
        "id": 45,
        "question": "Which of the following is a core component in an organization’s IT infrastructure?",
        "answers": {
            "a": "System",
            "b": "Storage",
            "c": "Security",
            "d": "All of them"
        },
        "correct": "b",
        "reason": "Storage is a core component in IT infrastructure."
    },
    {
        "lecture": 1,
        "id": 46,
        "question": "A facility that houses IT equipment including compute, storage, and network components, and other supporting infrastructure for providing centralized data-processing capabilities is called:",
        "answers": {
            "a": "System Center",
            "b": "Data Center",
            "c": "Infrastructure",
            "d": "All of them"
        },
        "correct": "b",
        "reason": "A data center houses IT equipment and supports centralized data processing."
    },
    {
        "lecture": 1,
        "id": 47,
        "question": "The building and floor space where the data center is constructed is referred to as:",
        "answers": {
            "a": "Facility",
            "b": "IT equipment",
            "c": "Support infrastructure",
            "d": "All of them"
        },
        "correct": "a",
        "reason": "The facility refers to the building and floor space of a data center."
    },
    {
        "lecture": 1,
        "id": 48,
        "question": "Equipment such as compute systems, storage systems, network equipment and cables, and cabinets are classified as:",
        "answers": {
            "a": "Facility",
            "b": "IT equipment",
            "c": "Support infrastructure",
            "d": "All of them"
        },
        "correct": "b",
        "reason": "IT equipment includes compute systems, storage systems, and network equipment."
    },
    {
        "lecture": 1,
        "id": 49,
        "question": "It includes all the equipment necessary to securely sustain the functioning of the data center. Some key support equipment are power equipment including uninterruptible power sources, and power generators; environmental control equipment including fire and water detection systems, heating, ventilation, and air conditioning (HVAC) systems; and security systems including biometrics, keycard, and video surveillance systems.",
        "answers": {
            "a": "Facility",
            "b": "IT equipment",
            "c": "Support infrastructure",
            "d": "All of them"
        },
        "correct": "c",
        "reason": "Support infrastructure includes all equipment necessary for the data center's functioning."
    },
    {
        "lecture": 1,
        "id": 50,
        "question": "Policies and procedures should be established, and control measures should be implemented to prevent unauthorized access to and alteration of information.",
        "answers": {
            "a": "Availability",
            "b": "Security",
            "c": "Capacity",
            "d": "Integrity"
        },
        "correct": "b",
        "reason": "Security involves preventing unauthorized access and alteration of information."
    },
    {
        "lecture": 1,
        "id": 51,
        "question": "Data center operations require adequate resources to efficiently store and process large and increasing amounts of data. When capacity requirements increase, additional capacity should be provided either without interrupting the availability or with minimal disruption.",
        "answers": {
            "a": "Availability",
            "b": "Security",
            "c": "Capacity",
            "d": "Integrity"
        },
        "correct": "c",
        "reason": "Capacity refers to efficiently storing and processing large amounts of data."
    },
    {
        "lecture": 1,
        "id": 52,
        "question": "Refers to mechanisms, such as error correction codes or parity bits, which ensure that data is stored and retrieved exactly as it was received.",
        "answers": {
            "a": "Availability",
            "b": "Security",
            "c": "Capacity",
            "d": "Integrity"
        },
        "correct": "d",
        "reason": "Data integrity ensures data is stored and retrieved correctly."
    },
    {
        "lecture": 1,
        "id": 53,
        "question": "Performance in data center components should provide optimal performance based on the required service levels.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Performance in data centers should meet required service levels."
    },
    {
        "lecture": 1,
        "id": 54,
        "question": "Availability is about deploying additional resources such as compute systems, new applications, and databases to meet the growing requirements.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Scalability, not availability, involves deploying additional resources to meet growing requirements."
    },
    {
        "lecture": 1,
        "id": 55,
        "question": "Manageability in a data center means providing easy, flexible, and integrated management of all its components. Efficient manageability can be achieved through automation for reducing manual intervention in common, repeatable tasks.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Manageability involves easy and flexible management of data center components."
    },
    {
        "lecture": 1,
        "id": 56,
        "question": "It is a continuous process of gathering information on various resources in the data center. The process involves monitoring parameters such as configuration, availability, capacity, performance, and security of resources.",
        "answers": {
            "a": "Planning",
            "b": "Provisioning",
            "c": "Reporting",
            "d": "Monitoring"
        },
        "correct": "d",
        "reason": "Monitoring involves continuously gathering information on data center resources."
    },
    {
        "lecture": 1,
        "id": 57,
        "question": "Presenting the details on resource performance, capacity, and utilization.",
        "answers": {
            "a": "Planning",
            "b": "Provisioning",
            "c": "Reporting",
            "d": "Monitoring"
        },
        "correct": "c",
        "reason": "Reporting presents details on resource performance, capacity, and utilization."
    },
    {
        "lecture": 1,
        "id": 58,
        "question": "Configuring and allocating resources to meet the capacity, availability, performance, and security requirements.",
        "answers": {
            "a": "Planning",
            "b": "Provisioning",
            "c": "Reporting",
            "d": "Monitoring"
        },
        "correct": "b",
        "reason": "Provisioning involves configuring and allocating resources to meet requirements."
    },
    {
        "lecture": 1,
        "id": 59,
        "question": "It is a process of estimating the amount of IT resources required to support business operations and meet the changing resource requirements. Planning leverages the data collected during monitoring and enables improving the overall utilization and performance of resources. It also enables estimation of future resource requirements. Data center managers also determine the impact of incidents and devise contingency plans to resolve them.",
        "answers": {
            "a": "Planning",
            "b": "Provisioning",
            "c": "Reporting",
            "d": "Monitoring"
        },
        "correct": "a",
        "reason": "Planning estimates the required IT resources and leverages monitoring data."
    },
    {
        "lecture": 1,
        "id": 60,
        "question": "Ensuring the proper functioning of resources and resolving incidents is called Maintenance.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Maintenance involves ensuring proper functioning and resolving incidents."
    },
    {
        "lecture": 1,
        "id": 61,
        "question": "Based on mainframes, applications, and databases hosted centrally and users connect to mainframes through terminals is called the Second Platform.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "This describes the First Platform."
    },
    {
        "lecture": 1,
        "id": 62,
        "question": "Based on the client-server model and distributed application architecture, it is called the Second Platform.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The Second Platform is based on the client-server model."
    },
    {
        "lecture": 1,
        "id": 63,
        "question": "The four Pillars of the Third Platform are:",
        "answers": {
            "a": "Cloud",
            "b": "Mobile devices",
            "c": "Big data",
            "d": "Social",
            "e": "All of them"
        },
        "correct": "e",
        "reason": "The Third Platform includes cloud, mobile, big data, and social technologies."
    },
    {
        "lecture": 2,
        "id": 64,
        "question": "What are the four technologies that make up the third platform?",
        "answers": {
            "a": "Cloud, Big Data, Social, and Mobile",
            "b": "Cloud, Virtualization, AI, and IoT",
            "c": "Big Data, Blockchain, Mobile, and AI"
        },
        "correct": "a",
        "reason": "The third platform consists of Cloud, Big Data, Social, and Mobile technologies."
    },
    {
        "lecture": 2,
        "id": 65,
        "question": "What does NIST stand for?",
        "answers": {
            "a": "National Institute of Science and Technology",
            "b": "National Institute of Standards and Technology",
            "c": "National Institute of Software and Technology"
        },
        "correct": "b",
        "reason": "NIST stands for National Institute of Standards and Technology."
    },
    {
        "lecture": 2,
        "id": 66,
        "question": "What is cloud computing?",
        "answers": {
            "a": "A model for enabling convenient, on-demand network access to shared computing resources",
            "b": "A type of hardware for data storage",
            "c": "A software for managing databases"
        },
        "correct": "a",
        "reason": "Cloud computing is a model for enabling convenient, on-demand network access to shared computing resources."
    },
    {
        "lecture": 2,
        "id": 67,
        "question": "Which of the following is NOT an essential characteristic of cloud computing?",
        "answers": {
            "a": "On-demand self-service",
            "b": "Broad network access",
            "c": "Manual resource allocation"
        },
        "correct": "c",
        "reason": "Manual resource allocation is not an essential characteristic of cloud computing."
    },
    {
        "lecture": 2,
        "id": 68,
        "question": "What does IaaS stand for?",
        "answers": {
            "a": "Internet as a Service",
            "b": "Infrastructure as a Service",
            "c": "Integration as a Service"
        },
        "correct": "b",
        "reason": "IaaS stands for Infrastructure as a Service."
    },
    {
        "lecture": 2,
        "id": 69,
        "question": "Which cloud service model allows users to deploy applications without managing the underlying infrastructure?",
        "answers": {
            "a": "IaaS",
            "b": "PaaS",
            "c": "SaaS"
        },
        "correct": "b",
        "reason": "PaaS allows users to deploy applications without managing the underlying infrastructure."
    },
    {
        "lecture": 2,
        "id": 70,
        "question": "What is a public cloud?",
        "answers": {
            "a": "Cloud infrastructure provisioned for open use by the general public",
            "b": "Cloud infrastructure used exclusively by a single organization",
            "c": "Cloud infrastructure shared by a specific community"
        },
        "correct": "a",
        "reason": "A public cloud is provisioned for open use by the general public."
    },
    {
        "lecture": 2,
        "id": 71,
        "question": "What is a private cloud?",
        "answers": {
            "a": "Cloud infrastructure used exclusively by a single organization",
            "b": "Cloud infrastructure shared by a specific community",
            "c": "Cloud infrastructure provisioned for open use by the general public"
        },
        "correct": "a",
        "reason": "A private cloud is used exclusively by a single organization."
    },
    {
        "lecture": 2,
        "id": 72,
        "question": "What is a hybrid cloud?",
        "answers": {
            "a": "A combination of two or more distinct cloud infrastructures",
            "b": "A cloud infrastructure used by the general public",
            "c": "A cloud infrastructure used exclusively by a single organization"
        },
        "correct": "a",
        "reason": "A hybrid cloud is a combination of two or more distinct cloud infrastructures."
    },
    {
        "lecture": 2,
        "id": 73,
        "question": "What does Big Data refer to?",
        "answers": {
            "a": "Small, manageable data sets",
            "b": "Large and complex data sets",
            "c": "Data stored in cloud servers"
        },
        "correct": "b",
        "reason": "Big Data refers to large and complex data sets."
    },
    {
        "lecture": 2,
        "id": 74,
        "question": "What are the three V's of Big Data?",
        "answers": {
            "a": "Volume, Velocity, Variety",
            "b": "Value, Veracity, Variability",
            "c": "Visibility, Variance, Volatility"
        },
        "correct": "a",
        "reason": "The three V's of Big Data are Volume, Velocity, and Variety."
    },
    {
        "lecture": 2,
        "id": 75,
        "question": "What is the purpose of Big Data analytics?",
        "answers": {
            "a": "To store data",
            "b": "To gain insights and derive business value from large data sets",
            "c": "To delete unnecessary data"
        },
        "correct": "b",
        "reason": "Big Data analytics aims to gain insights and derive business value from large data sets."
    },
    {
        "lecture": 2,
        "id": 76,
        "question": "What is social networking?",
        "answers": {
            "a": "The practice of individuals establishing connections for expanding social or business contacts",
            "b": "A method of storing large data sets",
            "c": "A technique for analyzing data"
        },
        "correct": "a",
        "reason": "Social networking is the practice of establishing connections for expanding social or business contacts."
    },
    {
        "lecture": 2,
        "id": 77,
        "question": "What is Social Network Analysis (SNA)?",
        "answers": {
            "a": "A method for storing data",
            "b": "The process of analyzing patterns of relationships in social networks",
            "c": "A way to delete unnecessary data"
        },
        "correct": "b",
        "reason": "SNA involves analyzing patterns of relationships in social networks."
    },
    {
        "lecture": 2,
        "id": 78,
        "question": "Which of the following is a use case of social networking?",
        "answers": {
            "a": "Brand networking",
            "b": "Data storage",
            "c": "Data deletion"
        },
        "correct": "a",
        "reason": "Brand networking is a use case of social networking."
    },
    {
        "lecture": 2,
        "id": 79,
        "question": "What is mobile computing?",
        "answers": {
            "a": "The use of mobile devices to access applications and information over wireless networks",
            "b": "A method for analyzing data",
            "c": "A technique for storing data"
        },
        "correct": "a",
        "reason": "Mobile computing involves accessing applications and information over wireless networks using mobile devices."
    },
    {
        "lecture": 2,
        "id": 80,
        "question": "What is enterprise mobility?",
        "answers": {
            "a": "Providing ubiquitous access to information and business applications over mobile devices",
            "b": "A method for storing data",
            "c": "A way to delete unnecessary data"
        },
        "correct": "a",
        "reason": "Enterprise mobility provides ubiquitous access to information and applications over mobile devices."
    },
    {
        "lecture": 2,
        "id": 81,
        "question": "What is mobile cloud computing?",
        "answers": {
            "a": "The convergence of cloud computing, Internet, and wireless technologies",
            "b": "A method for storing data",
            "c": "A technique for analyzing data"
        },
        "correct": "a",
        "reason": "Mobile cloud computing combines cloud computing, Internet, and wireless technologies."
    },
    {
        "lecture": 2,
        "id": 82,
        "question": "What is one key driver for transforming to the third platform?",
        "answers": {
            "a": "New/improved business models",
            "b": "Manual resource allocation",
            "c": "Data deletion"
        },
        "correct": "a",
        "reason": "New/improved business models drive the transformation to the third platform."
    },
    {
        "lecture": 2,
        "id": 83,
        "question": "What is a key characteristic of third platform infrastructure?",
        "answers": {
            "a": "Availability",
            "b": "Manual resource allocation",
            "c": "Data deletion"
        },
        "correct": "a",
        "reason": "Availability is a key characteristic of third platform infrastructure."
    },
    {
        "lecture": 2,
        "id": 84,
        "question": "What does ITaaS stand for?",
        "answers": {
            "a": "IT as a Service",
            "b": "Internet as a Service",
            "c": "Infrastructure as a Service"
        },
        "correct": "a",
        "reason": "ITaaS stands for IT as a Service."
    },
    {
        "lecture": 2,
        "id": 85,
        "question": "What does PaaS stand for?",
        "answers": {
            "a": "Platform as a Service",
            "b": "Product as a Service",
            "c": "Process as a Service"
        },
        "correct": "a",
        "reason": "PaaS stands for Platform as a Service."
    },
    {
        "lecture": 2,
        "id": 86,
        "question": "What is the purpose of a data lake?",
        "answers": {
            "a": "To store structured and non-structured data in its original format",
            "b": "To analyze data in real-time",
            "c": "To delete unnecessary data"
        },
        "correct": "a",
        "reason": "A data lake stores structured and non-structured data in its original format."
    },
    {
        "lecture": 2,
        "id": 87,
        "question": "What is MapReduce?",
        "answers": {
            "a": "A parallel programming framework for processing large data sets",
            "b": "A storage system for large data sets",
            "c": "A type of database"
        },
        "correct": "a",
        "reason": "MapReduce is a parallel programming framework for processing large data sets."
    },
    {
        "lecture": 2,
        "id": 88,
        "question": "What is the main benefit of using a hybrid cloud model?",
        "answers": {
            "a": "Combining the benefits of both public and private clouds",
            "b": "Using only private cloud resources",
            "c": "Storing data in a data lake"
        },
        "correct": "a",
        "reason": "The hybrid cloud model combines the benefits of both public and private clouds."
    },
    {
        "lecture": 2,
        "id": 89,
        "question": "What is one use case of mobile computing?",
        "answers": {
            "a": "Enterprise mobility",
            "b": "Data storage",
            "c": "Data deletion"
        },
        "correct": "a",
        "reason": "Enterprise mobility is a use case of mobile computing."
    },
    {
        "lecture": 2,
        "id": 90,
        "question": "What is the main purpose of Big Data analytics in healthcare?",
        "answers": {
            "a": "To improve patient care and outcomes",
            "b": "To delete unnecessary data",
            "c": "To store large data sets"
        },
        "correct": "a",
        "reason": "Big Data analytics in healthcare aims to improve patient care and outcomes."
    },
    {
        "lecture": 2,
        "id": 91,
        "question": "What does SaaS stand for?",
        "answers": {
            "a": "Software as a Service",
            "b": "System as a Service",
            "c": "Storage as a Service"
        },
        "correct": "a",
        "reason": "SaaS stands for Software as a Service."
    },
    {
        "lecture": 2,
        "id": 92,
        "question": "What is a community cloud?",
        "answers": {
            "a": "Cloud infrastructure shared by a specific community of consumers",
            "b": "Cloud infrastructure used by the general public",
            "c": "Cloud infrastructure used exclusively by a single organization"
        },
        "correct": "a",
        "reason": "A community cloud is shared by a specific community of consumers."
    },
    {
        "lecture": 2,
        "id": 93,
        "question": "What is the key driver for organizations to adopt social networking?",
        "answers": {
            "a": "Enhanced customer engagement",
            "b": "Data storage",
            "c": "Data deletion"
        },
        "correct": "a",
        "reason": "Enhanced customer engagement drives organizations to adopt social networking."
    },
    {
        "lecture": 2,
        "id": 94,
        "question": "A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources, (e.g., servers, storage, networks, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction is called:",
        "answers": {
            "a": "Compute System",
            "b": "Cloud Computing",
            "c": "Big Data",
            "d": "Virtualization"
        },
        "correct": "b",
        "reason": "Cloud computing provides on-demand network access to shared computing resources."
    },
    {
        "lecture": 2,
        "id": 95,
        "question": "A cloud is a collection of network-accessible:",
        "answers": {
            "a": "Hardware",
            "b": "Software",
            "c": "Both A and B",
            "d": "A ONLY"
        },
        "correct": "c",
        "reason": "A cloud consists of both hardware and software resources."
    },
    {
        "lecture": 2,
        "id": 96,
        "question": "The National Institute of Standards and Technology (NIST) defines cloud computing as “a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.”",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "NIST's definition of cloud computing emphasizes on-demand access and minimal management."
    },
    {
        "lecture": 2,
        "id": 97,
        "question": "The term 'cloud' originates from the cloud-like bubble that is commonly used in technical architecture diagrams to represent a system, such as the Internet, a network, or a compute cluster.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The term 'cloud' comes from the representation in technical diagrams."
    },
    {
        "lecture": 2,
        "id": 98,
        "question": "A cloud infrastructure is built, operated, and managed by a cloud service provider.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Cloud infrastructure is managed by a cloud service provider."
    },
    {
        "lecture": 2,
        "id": 99,
        "question": "A cloud service is a hardware resource that is offered for consumption by a provider.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A cloud service is a combination of hardware and software resources."
    },
    {
        "lecture": 2,
        "id": 100,
        "question": "What is similar to utility services such as electricity, water, and telephone?",
        "answers": {
            "a": "OS",
            "b": "Application",
            "c": "Cloud Model",
            "d": "Both A and B"
        },
        "correct": "c",
        "reason": "The cloud model is similar to utility services."
    },
    {
        "lecture": 2,
        "id": 101,
        "question": "A consumer can unilaterally provision computing capabilities, such as server time or networked storage, as needed automatically without requiring human interaction with each service provider. This is an example of:",
        "answers": {
            "a": "On-demand self-service",
            "b": "Broad network access",
            "c": "Resource pooling",
            "d": "Rapid elasticity"
        },
        "correct": "a",
        "reason": "On-demand self-service allows consumers to provision computing capabilities as needed."
    },
    {
        "lecture": 2,
        "id": 102,
        "question": "Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, and workstations). This describes:",
        "answers": {
            "a": "On-demand self-service",
            "b": "Broad network access",
            "c": "Resource pooling",
            "d": "Rapid elasticity"
        },
        "correct": "b",
        "reason": "Broad network access ensures capabilities are accessible over the network."
    },
    {
        "lecture": 2,
        "id": 103,
        "question": "The provider’s computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand. This describes:",
        "answers": {
            "a": "On-demand self-service",
            "b": "Broad network access",
            "c": "Resource pooling",
            "d": "Rapid elasticity"
        },
        "correct": "c",
        "reason": "Resource pooling allows providers to serve multiple consumers with pooled resources."
    },
    {
        "lecture": 2,
        "id": 104,
        "question": "Capabilities can be rapidly and elastically provisioned, in some cases automatically, to scale rapidly outward and inward commensurate with demand. This is an example of:",
        "answers": {
            "a": "On-demand self-service",
            "b": "Broad network access",
            "c": "Resource pooling",
            "d": "Rapid elasticity"
        },
        "correct": "d",
        "reason": "Rapid elasticity allows capabilities to be scaled quickly according to demand."
    },
    {
        "lecture": 2,
        "id": 105,
        "question": "Measured service is when cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (e.g., storage, processing, bandwidth, and active user accounts).",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Measured service involves automatic control and optimization of resources."
    },
    {
        "lecture": 2,
        "id": 106,
        "question": "The capability provided to the consumer is to provision processing, storage, networks, and other fundamental computing resources where the consumer is able to deploy and run arbitrary software, which can include operating systems and applications. The consumer does not manage or control the underlying cloud infrastructure but has control over operating systems, storage, and deployed applications; and possibly limited control of select networking components (e.g., host firewalls).",
        "answers": {
            "a": "Infrastructure as a Service",
            "b": "Platform as a Service",
            "c": "Software as a Service",
            "d": "Desktop as a Service"
        },
        "correct": "a",
        "reason": "IaaS allows consumers to provision and manage fundamental computing resources."
    },
    {
        "lecture": 2,
        "id": 107,
        "question": "The capability provided to the consumer is to deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools supported by the provider. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment.",
        "answers": {
            "a": "Infrastructure as a Service",
            "b": "Platform as a Service",
            "c": "Software as a Service",
            "d": "Desktop as a Service"
        },
        "correct": "b",
        "reason": "PaaS allows consumers to deploy applications using provider-supported tools."
    },
    {
        "lecture": 2,
        "id": 108,
        "question": "The capability provided to the consumer is to use the provider’s applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser, (e.g., web-based email, or a program interface. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user-specific application configuration settings.",
        "answers": {
            "a": "Infrastructure as a Service",
            "b": "Platform as a Service",
            "c": "Software as a Service",
            "d": "Desktop as a Service"
        },
        "correct": "c",
        "reason": "SaaS provides access to applications running on the provider's cloud infrastructure."
    },
    {
        "lecture": 2,
        "id": 109,
        "question": "The cloud infrastructure provisioned for open use by the general public is called:",
        "answers": {
            "a": "Public",
            "b": "Private",
            "c": "Community",
            "d": "Hybrid"
        },
        "correct": "a",
        "reason": "Public cloud is for open use by the general public."
    },
    {
        "lecture": 2,
        "id": 110,
        "question": "Public cloud services may be free, subscription-based, or provided on a pay-per-use model. They provide the benefits of low up-front expenditure on IT resources and enormous scalability. However, some concerns for the consumers include network availability, risks associated with multi-tenancy, visibility and control over the cloud resources and data, and restrictive default service levels.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Public cloud services offer various pricing models and scalability but have some consumer concerns."
    },
    {
        "lecture": 2,
        "id": 111,
        "question": "The cloud infrastructure provisioned for exclusive use by a single organization comprising multiple consumers is called:",
        "answers": {
            "a": "Public",
            "b": "Private",
            "c": "Community",
            "d": "Hybrid"
        },
        "correct": "b",
        "reason": "Private cloud is for exclusive use by a single organization."
    },
    {
        "lecture": 2,
        "id": 112,
        "question": "The externally-hosted private cloud is deployed by an organization in its data center within its own premises.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Externally-hosted private cloud is not deployed in the organization's own data center."
    },
    {
        "lecture": 2,
        "id": 113,
        "question": "The externally-hosted private cloud (or off-premise private cloud) model involves an organization outsourcing the implementation of the private cloud to an external cloud service provider.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Externally-hosted private cloud is outsourced to an external provider."
    },
    {
        "lecture": 2,
        "id": 114,
        "question": "The cloud infrastructure provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns is called:",
        "answers": {
            "a": "Public",
            "b": "Private",
            "c": "Community",
            "d": "Hybrid"
        },
        "correct": "c",
        "reason": "Community cloud is for exclusive use by a specific community of consumers."
    },
    {
        "lecture": 2,
        "id": 115,
        "question": "In an on-premise community cloud, one or more organizations provide cloud services that are consumed by the community. The cloud infrastructure is deployed on the premises of the organizations providing the cloud services.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "On-premise community cloud is deployed on the premises of providing organizations."
    },
    {
        "lecture": 2,
        "id": 116,
        "question": "In the externally-hosted community cloud model, the organizations of the community outsource the implementation of the community cloud to an external cloud service provider.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Externally-hosted community cloud is outsourced to an external provider."
    },
    {
        "lecture": 2,
        "id": 117,
        "question": "The cloud infrastructure composed of two or more distinct cloud infrastructures (private, community, or public) that remain unique entities is called:",
        "answers": {
            "a": "Public",
            "b": "Private",
            "c": "Community",
            "d": "Hybrid"
        },
        "correct": "d",
        "reason": "Hybrid cloud combines two or more distinct cloud infrastructures."
    },
    {
        "lecture": 2,
        "id": 118,
        "question": "Migrating standard packaged applications such as e-mail to the public cloud is an example of:",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Standard packaged applications like e-mail can be migrated to the public cloud."
    },
    {
        "lecture": 2,
        "id": 119,
        "question": "Cloud bursting is provisioning resources for a limited time from a public cloud to handle peak workloads.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Cloud bursting involves provisioning resources for a limited time."
    },
    {
        "lecture": 2,
        "id": 120,
        "question": "Web application hosting involves hosting the most critical applications on the public cloud.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Web application hosting involves hosting less critical applications on the public cloud."
    },
    {
        "lecture": 2,
        "id": 121,
        "question": "Application development and testing involves developing and testing applications in the public cloud before launching them.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Applications can be developed and tested in the public cloud before launch."
    },
    {
        "lecture": 2,
        "id": 122,
        "question": "Information assets whose high volume, high velocity, and high variety require the use of new technical architectures and analytical methods to gain insights and derive business value are called:",
        "answers": {
            "a": "Information",
            "b": "Digital Data",
            "c": "Big Data",
            "d": "All of the above"
        },
        "correct": "c",
        "reason": "Big Data requires new architectures and methods to gain insights."
    },
    {
        "lecture": 2,
        "id": 123,
        "question": "Big Data includes data sets of considerable sizes containing both structured and non-structured data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Big Data includes large data sets with structured and non-structured data."
    },
    {
        "lecture": 2,
        "id": 124,
        "question": "Big Data exceeds the storage and processing capability of conventional IT infrastructure and software systems. It needs a highly-scalable architecture for efficient storage.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Big Data requires scalable architecture for storage and processing."
    },
    {
        "lecture": 2,
        "id": 125,
        "question": "The word 'Big' in Big Data refers to the massive volumes of data. This characteristic is called:",
        "answers": {
            "a": "Volume",
            "b": "Veracity",
            "c": "Velocity",
            "d": "Variety"
        },
        "correct": "a",
        "reason": "Volume refers to the massive amount of data in Big Data."
    },
    {
        "lecture": 2,
        "id": 126,
        "question": "What refers to the rate at which data is produced and changes?",
        "answers": {
            "a": "Volume",
            "b": "Veracity",
            "c": "Velocity",
            "d": "Variety"
        },
        "correct": "c",
        "reason": "Velocity refers to the rate at which data is produced and changes."
    },
    {
        "lecture": 2,
        "id": 127,
        "question": "What refers to the diversity in the formats and types of data?",
        "answers": {
            "a": "Volume",
            "b": "Veracity",
            "c": "Velocity",
            "d": "Variety"
        },
        "correct": "d",
        "reason": "Variety refers to the different formats and types of data."
    },
    {
        "lecture": 2,
        "id": 128,
        "question": "What refers to the constantly changing meaning of data?",
        "answers": {
            "a": "Volume",
            "b": "Veracity",
            "c": "Velocity",
            "d": "Variability"
        },
        "correct": "d",
        "reason": "Variability refers to the changing meaning of data."
    },
    {
        "lecture": 2,
        "id": 129,
        "question": "What refers to the varying quality and reliability of data?",
        "answers": {
            "a": "Volume",
            "b": "Veracity",
            "c": "Velocity",
            "d": "Variability"
        },
        "correct": "b",
        "reason": "Veracity refers to the quality and reliability of data."
    },
    {
        "lecture": 2,
        "id": 130,
        "question": "Data for analytics typically comes from data warehouses and data lakes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Data warehouses and data lakes are common sources for analytics data."
    },
    {
        "lecture": 2,
        "id": 131,
        "question": "A data warehouse is a central repository of integrated data gathered from different sources.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Data warehouses integrate data from various sources."
    },
    {
        "lecture": 2,
        "id": 132,
        "question": "A data warehouse stores current and __________ data in a __________ format.",
        "answers": {
            "a": "big, unstructured",
            "b": "historical, structured",
            "c": "digital, unstructured",
            "d": "all of the above"
        },
        "correct": "b",
        "reason": "Data warehouses store historical data in a structured format."
    },
    {
        "lecture": 2,
        "id": 133,
        "question": "A data lake is a collection of data that is stored as an exact or near-exact copy of the source format. Data is classified, organized, or analyzed only when it is accessed.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Data lakes store data in its original format until accessed."
    },
    {
        "lecture": 2,
        "id": 134,
        "question": "Data lake architecture is a 'store-everything' approach to Big Data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Data lakes follow a 'store-everything' approach."
    },
    {
        "lecture": 2,
        "id": 135,
        "question": "An efficient way to process, store, and retrieve data is called:",
        "answers": {
            "a": "MapReduce",
            "b": "Query",
            "c": "Storage",
            "d": "All of the above"
        },
        "correct": "b",
        "reason": "Query processes, stores, and retrieves data efficiently."
    },
    {
        "lecture": 2,
        "id": 136,
        "question": "Parallel computation across many servers is called:",
        "answers": {
            "a": "MapReduce",
            "b": "Query",
            "c": "Storage",
            "d": "All of the above"
        },
        "correct": "a",
        "reason": "MapReduce allows parallel computation across many servers."
    },
    {
        "lecture": 2,
        "id": 137,
        "question": "Distributed architecture, non-relational, non-structured data is:",
        "answers": {
            "a": "MapReduce",
            "b": "Query",
            "c": "Storage",
            "d": "All of the above"
        },
        "correct": "c",
        "reason": "Storage handles distributed, non-relational, non-structured data."
    },
    {
        "lecture": 2,
        "id": 138,
        "question": "A NoSQL database may be implemented on top of the distributed file system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "NoSQL databases can be implemented on top of distributed file systems."
    },
    {
        "lecture": 2,
        "id": 139,
        "question": "Query simplifies the specification of MapReduce operations, and the retrieval and analysis of the results.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Query simplifies MapReduce operations and result analysis."
    },
    {
        "lecture": 2,
        "id": 140,
        "question": "Healthcare provides consolidated diagnostic information and improves patient care and outcome.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Big Data analytics in healthcare improves patient care and outcomes."
    },
    {
        "lecture": 2,
        "id": 141,
        "question": "Finance uses Big Data for profiling customers, analyzing behavior on social networks, and detecting credit card frauds.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Big Data helps finance with customer profiling and fraud detection."
    },
    {
        "lecture": 2,
        "id": 142,
        "question": "Retail gains valuable insights for competitive pricing, anticipating future demand, effective marketing campaigns, and optimized inventory assortment.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Big Data provides valuable insights for the retail sector."
    },
    {
        "lecture": 2,
        "id": 143,
        "question": "Government enables improved efficiency and effectiveness across various domains such as social services, crime prevention, transportation, tax compliance, revenue management, education, defense, and national security.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Big Data improves efficiency and effectiveness in government operations."
    },
    {
        "lecture": 3,
        "id": 144,
        "question": "What are the five logical layers in a data center infrastructure?",
        "answers": {
            "a": "Physical, Virtual, Software-Defined, Orchestration, Services",
            "b": "Compute, Storage, Network, Security, Management",
            "c": "Application, Database, Network, Hardware, Security"
        },
        "correct": "a",
        "reason": "These are the key layers that make up a data center infrastructure."
    },
    {
        "lecture": 3,
        "id": 145,
        "question": "Which layer of a data center includes compute systems, storage systems, and networking devices?",
        "answers": {
            "a": "Virtual Infrastructure",
            "b": "Physical Infrastructure",
            "c": "Orchestration Layer"
        },
        "correct": "b",
        "reason": "Physical infrastructure forms the foundation layer of a data center."
    },
    {
        "lecture": 3,
        "id": 146,
        "question": "What is virtualization in the context of a data center?",
        "answers": {
            "a": "The process of physically connecting all devices",
            "b": "The process of abstracting physical resources and creating virtual resources",
            "c": "The process of installing operating systems on servers"
        },
        "correct": "b",
        "reason": "Virtualization abstracts physical resources like compute, storage, and network."
    },
    {
        "lecture": 3,
        "id": 147,
        "question": "What does a hypervisor do?",
        "answers": {
            "a": "Manages physical storage devices",
            "b": "Creates and manages virtual machines",
            "c": "Controls network traffic"
        },
        "correct": "b",
        "reason": "A hypervisor is virtualization software that creates and manages virtual machines."
    },
    {
        "lecture": 3,
        "id": 148,
        "question": "What is a key benefit of compute virtualization?",
        "answers": {
            "a": "Increases the physical size of servers",
            "b": "Allows multiple OS to run concurrently on a single compute system",
            "c": "Reduces the need for physical security"
        },
        "correct": "b",
        "reason": "Compute virtualization allows multiple operating systems to run concurrently."
    },
    {
        "lecture": 3,
        "id": 149,
        "question": "What is the role of the orchestration layer in a data center?",
        "answers": {
            "a": "To physically connect all devices",
            "b": "To provide workflows for executing automated tasks",
            "c": "To manage power and cooling systems"
        },
        "correct": "b",
        "reason": "The orchestration layer provides workflows for executing automated tasks."
    },
    {
        "lecture": 3,
        "id": 150,
        "question": "What is the function of a service catalog in the service layer?",
        "answers": {
            "a": "To store raw data",
            "b": "To present information about IT resources as services",
            "c": "To manage user accounts"
        },
        "correct": "b",
        "reason": "A service catalog presents information about IT resources being offered as services."
    },
    {
        "lecture": 3,
        "id": 151,
        "question": "What is business continuity (BC) in a data center?",
        "answers": {
            "a": "The process of installing new software",
            "b": "Proactive and reactive measures to mitigate the impact of downtime",
            "c": "Managing the physical space of the data center"
        },
        "correct": "b",
        "reason": "BC includes measures to mitigate the impact of downtime due to outages."
    },
    {
        "lecture": 3,
        "id": 152,
        "question": "What does a Logical Volume Manager (LVM) do?",
        "answers": {
            "a": "Manages logical and physical storage",
            "b": "Connects compute systems to the internet",
            "c": "Manages user permissions"
        },
        "correct": "a",
        "reason": "LVM manages logical and physical storage, allowing for flexible storage management."
    },
    {
        "lecture": 3,
        "id": 153,
        "question": "What are the main types of compute systems used in data centers?",
        "answers": {
            "a": "Desktop computers and laptops",
            "b": "Tower, Rack-mounted, and Blade compute systems",
            "c": "Smartphones and tablets"
        },
        "correct": "b",
        "reason": "Data centers typically use tower, rack-mounted, and blade compute systems."
    },
    {
        "lecture": 3,
        "id": 154,
        "question": "What is the primary benefit of desktop virtualization?",
        "answers": {
            "a": "Increased physical security",
            "b": "Decoupling OS, applications, and user profiles from physical hardware",
            "c": "Reduced need for network connectivity"
        },
        "correct": "b",
        "reason": "Desktop virtualization decouples OS, applications, and user profiles from hardware."
    },
    {
        "lecture": 3,
        "id": 155,
        "question": "What is a key feature of a blade compute system?",
        "answers": {
            "a": "Requires individual power supply for each blade",
            "b": "Contains only core processing components and fits into a blade enclosure",
            "c": "Cannot be used in large environments"
        },
        "correct": "b",
        "reason": "Blade compute systems contain only core processing components and fit into an enclosure."
    },
    {
        "lecture": 3,
        "id": 156,
        "question": "What is an example of an application virtualization technique?",
        "answers": {
            "a": "Application encapsulation",
            "b": "Using physical servers",
            "c": "Installing applications on each user's device"
        },
        "correct": "a",
        "reason": "Application encapsulation is a technique of application virtualization."
    },
    {
        "lecture": 3,
        "id": 157,
        "question": "What is the benefit of a software-defined data center (SDDC)?",
        "answers": {
            "a": "Increased need for physical hardware",
            "b": "Agility and faster provisioning of resources",
            "c": "Reduced need for management software"
        },
        "correct": "b",
        "reason": "SDDC provides agility and faster provisioning of resources."
    },
    {
        "lecture": 3,
        "id": 158,
        "question": "What is the purpose of the software-defined controller?",
        "answers": {
            "a": "To physically connect all network devices",
            "b": "To automate provisioning and configuration based on policies",
            "c": "To manage power and cooling systems"
        },
        "correct": "b",
        "reason": "The software-defined controller automates provisioning and configuration."
    },
    {
        "lecture": 3,
        "id": 159,
        "question": "What does the hypervisor kernel do?",
        "answers": {
            "a": "Manages network traffic",
            "b": "Provides OS functionality like process and memory management",
            "c": "Connects storage devices to the network"
        },
        "correct": "b",
        "reason": "The hypervisor kernel provides OS functionality such as process and memory management."
    },
    {
        "lecture": 3,
        "id": 160,
        "question": "What are the three techniques for application virtualization?",
        "answers": {
            "a": "Encapsulation, Deployment, Execution",
            "b": "Encapsulation, Presentation, Streaming",
            "c": "Presentation, Execution, Streaming"
        },
        "correct": "b",
        "reason": "The three techniques are encapsulation, presentation, and streaming."
    },
    {
        "lecture": 3,
        "id": 161,
        "question": "What is a key advantage of using a converged infrastructure?",
        "answers": {
            "a": "Higher costs",
            "b": "Pre-configured and optimized for faster deployment",
            "c": "Complex management"
        },
        "correct": "b",
        "reason": "Converged infrastructure is pre-configured and optimized for faster deployment."
    },
    {
        "lecture": 3,
        "id": 162,
        "question": "What does the business continuity (BC) cross-layer function include?",
        "answers": {
            "a": "Activities to mitigate downtime impact",
            "b": "Processes for installing new software",
            "c": "Methods to increase physical security"
        },
        "correct": "a",
        "reason": "BC includes activities to mitigate the impact of downtime."
    },
    {
        "lecture": 3,
        "id": 163,
        "question": "Which component in a compute system is responsible for executing software instructions?",
        "answers": {
            "a": "Memory",
            "b": "Processor",
            "c": "Storage drive"
        },
        "correct": "b",
        "reason": "The processor executes software instructions."
    },
    {
        "lecture": 3,
        "id": 164,
        "question": "What is the primary purpose of a file system?",
        "answers": {
            "a": "To manage network traffic",
            "b": "To control and manage storage and retrieval of files",
            "c": "To provide power to compute systems"
        },
        "correct": "b",
        "reason": "A file system controls and manages the storage and retrieval of files."
    },
    {
        "lecture": 3,
        "id": 165,
        "question": "What is the role of a Logical Volume Manager (LVM)?",
        "answers": {
            "a": "To manage logical and physical storage",
            "b": "To manage network traffic",
            "c": "To connect compute systems to the internet"
        },
        "correct": "a",
        "reason": "LVM manages logical and physical storage, allowing for flexible storage management."
    },
    {
        "lecture": 3,
        "id": 166,
        "question": "What is the function of a hypervisor in compute virtualization?",
        "answers": {
            "a": "Manages physical servers",
            "b": "Creates and manages virtual machines",
            "c": "Connects storage devices"
        },
        "correct": "b",
        "reason": "A hypervisor creates and manages virtual machines."
    },
    {
        "lecture": 3,
        "id": 167,
        "question": "What is an advantage of using application virtualization?",
        "answers": {
            "a": "Increased physical security",
            "b": "Decouples applications from the underlying OS and hardware",
            "c": "Reduces the need for network connectivity"
        },
        "correct": "b",
        "reason": "Application virtualization decouples applications from the underlying OS and hardware."
    },
    {
        "lecture": 3,
        "id": 168,
        "question": "What does the orchestration layer in a data center provide?",
        "answers": {
            "a": "Workflows for executing automated tasks",
            "b": "Physical connection of all devices",
            "c": "Management of power and cooling systems"
        },
        "correct": "a",
        "reason": "The orchestration layer provides workflows for executing automated tasks."
    },
    {
        "lecture": 3,
        "id": 169,
        "question": "What are the key benefits of a Software-Defined Data Center (SDDC)?",
        "answers": {
            "a": "Increased physical hardware costs",
            "b": "Agility, cost efficiency, and centralized management",
            "c": "Reduced need for management software"
        },
        "correct": "b",
        "reason": "SDDC provides agility, cost efficiency, and centralized management."
    },
    {
        "lecture": 3,
        "id": 170,
        "question": "What is a virtual machine (VM)?",
        "answers": {
            "a": "A physical compute system",
            "b": "A logical compute system with virtual hardware",
            "c": "A type of storage device"
        },
        "correct": "b",
        "reason": "A VM is a logical compute system with virtual hardware."
    },
    {
        "lecture": 3,
        "id": 171,
        "question": "What is the purpose of application encapsulation in virtualization?",
        "answers": {
            "a": "To increase physical security",
            "b": "To aggregate an application within a virtualized container",
            "c": "To manage power and cooling systems"
        },
        "correct": "b",
        "reason": "Application encapsulation aggregates an application within a virtualized container."
    },
    {
        "lecture": 3,
        "id": 172,
        "question": "What does a storage area network (SAN) enable in information-centric architecture?",
        "answers": {
            "a": "Direct connection of storage devices to servers",
            "b": "Sharing of storage resources among multiple compute systems",
            "c": "Management of user accounts"
        },
        "correct": "b",
        "reason": "SAN enables sharing of storage resources among multiple compute systems."
    },
    {
        "lecture": 3,
        "id": 173,
        "question": "What is a common use for magnetic tape in data centers?",
        "answers": {
            "a": "Storing performance-sensitive applications",
            "b": "Long-term storage, backup, and archiving",
            "c": "Running operating systems"
        },
        "correct": "b",
        "reason": "Magnetic tape is used for long-term storage, backup, and archiving."
    },
    {
        "lecture": 3,
        "id": 174,
        "question": "The IT infrastructure is arranged in three logical layers and five cross-layer functions.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "The IT infrastructure is arranged in five logical layers and three cross-layer functions."
    },
    {
        "lecture": 3,
        "id": 175,
        "question": "The five layers are physical infrastructure, virtual infrastructure, software-defined infrastructure, orchestration, and service.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These are the key layers that make up a data center infrastructure."
    },
    {
        "lecture": 3,
        "id": 176,
        "question": "The three cross-layer functions are business continuity, security, and management.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These functions support all layers to ensure reliable, secure, and efficient operation."
    },
    {
        "lecture": 3,
        "id": 177,
        "question": "Business continuity and security functions include mechanisms and processes that are required to provide reliable and secure access to applications, information, and services.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These functions ensure continuous and secure access to critical resources."
    },
    {
        "lecture": 3,
        "id": 178,
        "question": "The infrastructure can be transformed into a cloud infrastructure that could be either private or public.",
        "answers": {
            "a": "True",
            "b": "False",
            "c": "Hybrid",
            "d": "A and B"
        },
        "correct": "a",
        "reason": "Infrastructure can be transformed into either private or public cloud."
    },
    {
        "lecture": 3,
        "id": 179,
        "question": "The infrastructure can be connected to an external cloud to leverage the hybrid cloud model.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Hybrid cloud integrates external cloud resources with internal infrastructure."
    },
    {
        "lecture": 3,
        "id": 180,
        "question": "What forms the foundation layer of the data center infrastructure?",
        "answers": {
            "a": "Virtual Infrastructure",
            "b": "Physical Infrastructure",
            "c": "Security",
            "d": "Services"
        },
        "correct": "b",
        "reason": "Physical infrastructure is the base layer of a data center."
    },
    {
        "lecture": 3,
        "id": 181,
        "question": "Physical components include compute systems, storage, and network devices.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These are essential components of the physical infrastructure."
    },
    {
        "lecture": 3,
        "id": 182,
        "question": "What abstracts physical resources and creates virtual resources?",
        "answers": {
            "a": "Virtual Infrastructure",
            "b": "Physical Infrastructure",
            "c": "Security",
            "d": "Services"
        },
        "correct": "a",
        "reason": "Virtual infrastructure abstracts and virtualizes physical resources."
    },
    {
        "lecture": 3,
        "id": 183,
        "question": "Virtual compute, virtual storage, and virtual network are virtual components.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These are examples of virtualized resources."
    },
    {
        "lecture": 3,
        "id": 184,
        "question": "What are the benefits of virtualization?",
        "answers": {
            "a": "Resource consolidation and multitenant environment",
            "b": "Improved resource utilization and increased ROI",
            "c": "Flexible resource provisioning and rapid elasticity",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "Virtualization offers all these benefits."
    },
    {
        "lecture": 3,
        "id": 185,
        "question": "Virtualization enables a single hardware resource to support multiple concurrent instances of systems, or multiple hardware resources to support a single instance of a system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Virtualization allows flexible utilization of hardware resources."
    },
    {
        "lecture": 3,
        "id": 186,
        "question": "What is an aggregation of computing resources, such as processing power, memory, storage, and network bandwidth?",
        "answers": {
            "a": "Physical Pool",
            "b": "Resource Pool",
            "c": "Logical Pool"
        },
        "correct": "b",
        "reason": "A resource pool aggregates various computing resources."
    },
    {
        "lecture": 3,
        "id": 187,
        "question": "Software-defined infrastructure is deployed either on the virtual layer or on the logical layer.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Software-defined infrastructure is deployed on the virtual or physical layer."
    },
    {
        "lecture": 3,
        "id": 188,
        "question": "The key architectural components in the software-defined approach include software-defined compute (equivalent to compute virtualization), software-defined storage (SDS), and software-defined network (SDN).",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These are the primary components of software-defined infrastructure."
    },
    {
        "lecture": 3,
        "id": 189,
        "question": "What are the functions of the orchestration layer?",
        "answers": {
            "a": "Provides workflows for executing automated tasks",
            "b": "Interacts with various components across layers and functions to invoke provisioning tasks",
            "c": "All of the above"
        },
        "correct": "c",
        "reason": "The orchestration layer provides workflows and interacts with components for task execution."
    },
    {
        "lecture": 3,
        "id": 190,
        "question": "The orchestration software enables this automated arrangement, coordination, and management of the tasks.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Orchestration software automates task management and coordination."
    },
    {
        "lecture": 3,
        "id": 191,
        "question": "What are the benefits of services?",
        "answers": {
            "a": "Delivers IT resources as services to users",
            "b": "Enables users to achieve desired business results",
            "c": "Users have no liabilities associated with owning the resources",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "Services offer all these benefits to users."
    },
    {
        "lecture": 3,
        "id": 192,
        "question": "Functions of the service layer include storing service information in a service catalog and presenting them to the users, and enabling users to access services via a self-service portal.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The service layer stores service information and provides access through a portal."
    },
    {
        "lecture": 3,
        "id": 193,
        "question": "The business continuity (BC) cross-layer function specifies the adoption of proactive and reactive measures that enable an organization to mitigate the impact of downtime due to planned and unplanned outages.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "BC includes measures to mitigate downtime impact."
    },
    {
        "lecture": 3,
        "id": 194,
        "question": "The reactive measures include activities and processes such as business impact analysis, risk assessment, and technology solutions such as backup, archiving, and replication.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "These are proactive measures, not reactive."
    },
    {
        "lecture": 3,
        "id": 195,
        "question": "The reactive measures include activities and processes such as disaster recovery and disaster restart to be invoked in the event of a service failure.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Reactive measures include disaster recovery and restart."
    },
    {
        "lecture": 3,
        "id": 196,
        "question": "What supports all the layers to provide secure services and supports all the layers to provide uninterrupted services?",
        "answers": {
            "a": "Business continuity, security",
            "b": "Security, business continuity",
            "c": "Services, business continuity",
            "d": "Security, services"
        },
        "correct": "b",
        "reason": "Security supports secure services, and business continuity supports uninterrupted services."
    },
    {
        "lecture": 3,
        "id": 197,
        "question": "The management cross-layer function specifies the adoption of activities related to data center operations management.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Management includes activities for data center operations."
    },
    {
        "lecture": 3,
        "id": 198,
        "question": "What tasks include handling of infrastructure configuration, resource provisioning, problem resolution, capacity, availability, and compliance conformance?",
        "answers": {
            "a": "System operation management",
            "b": "Storage operation management",
            "c": "Services operation management",
            "d": "Both a and b"
        },
        "correct": "a",
        "reason": "."
    },
    {
        "lecture": 3,
        "id": 199,
        "question": "What approach involves purchasing components (hardware and software) from multiple different vendors, enabling organizations to leverage high-quality products and services from leading vendors?",
        "answers": {
            "a": "Best-of-breed",
            "b": "Converged Infrastructure"
        },
        "correct": "a",
        "reason": "Best-of-breed involves using high-quality components from different vendors."
    },
    {
        "lecture": 3,
        "id": 200,
        "question": "What integrates hardware and software components that make up a data center into a single packaged solution, reducing the time to acquire and deploy the infrastructure?",
        "answers": {
            "a": "Best-of-breed",
            "b": "Converged Infrastructure"
        },
        "correct": "b",
        "reason": "Converged Infrastructure integrates components into a single package."
    },
    {
        "lecture": 3,
        "id": 201,
        "question": "A compute system is a computing platform (hardware and system software) that runs applications. Physical components include processor, memory, internal storage, and I/O devices. Logical components include OS, device drivers, file system, and logical volume manager.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of a compute system."
    },
    {
        "lecture": 3,
        "id": 202,
        "question": "What is also known as a Central Processing Unit (CPU), an integrated circuit that executes the instructions of a software program by performing fundamental arithmetical, logical, and input/output operations?",
        "answers": {
            "a": "RAM",
            "b": "Chipset",
            "c": "ROM",
            "d": "Processor"
        },
        "correct": "d",
        "reason": "The CPU performs these fundamental operations."
    },
    {
        "lecture": 3,
        "id": 203,
        "question": "Main memory is an IC that serves as a volatile data storage internal to a compute system. The RAM is directly accessible by the processor, and holds the software programs for the execution and the data used by the processor.",
        "answers": {
            "a": "RAM",
            "b": "Chipset",
            "c": "ROM",
            "d": "Processor"
        },
        "correct": "a",
        "reason": "RAM is the main memory used for these functions."
    },
    {
        "lecture": 3,
        "id": 204,
        "question": "A common processor/instruction set architecture is the x86 architecture with 32-bit and 64-bit processing capabilities.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "x86 is a widely used processor architecture."
    },
    {
        "lecture": 3,
        "id": 205,
        "question": "What is a type of non-volatile semiconductor memory from which data can only be read but not written to? It contains the boot firmware, power management firmware, and other device-specific firmware.",
        "answers": {
            "a": "RAM",
            "b": "Chipset",
            "c": "ROM",
            "d": "Processor"
        },
        "correct": "c",
        "reason": "ROM is read-only memory used for firmware."
    },
    {
        "lecture": 3,
        "id": 206,
        "question": "What is a collection of microchips on a motherboard designed to perform specific functions, with Northbridge managing processor access to the RAM and GPU, and Southbridge connecting the processor to different peripheral ports?",
        "answers": {
            "a": "RAM",
            "b": "Chipset",
            "c": "ROM",
            "d": "Processor"
        },
        "correct": "b",
        "reason": "Chipset manages various functions on the motherboard."
    },
    {
        "lecture": 3,
        "id": 207,
        "question": "A motherboard is a printed circuit board (PCB) to which all compute system components connect. It has sockets to hold components such as the microprocessor chip, RAM, and ROM. It also has network ports, I/O ports to connect devices such as keyboard, mouse, and printers.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of a motherboard."
    },
    {
        "lecture": 3,
        "id": 208,
        "question": "Secondary storage is a persistent storage device, such as a hard disk drive or a solid-state drive, on which the OS and the application software are installed. The processor cannot directly access secondary storage. The desired applications and data are loaded from the secondary storage onto the RAM to enable the processor to access them.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Secondary storage holds data that is loaded into RAM for processing."
    },
    {
        "lecture": 3,
        "id": 209,
        "question": "What acts as an intermediary between a user of a compute system and the compute system hardware, controlling and managing the hardware and software on a compute system?",
        "answers": {
            "a": "Virtual Memory",
            "b": "The operating system (OS)",
            "c": "LVM",
            "d": "Processor"
        },
        "correct": "b",
        "reason": "The OS manages hardware and software resources."
    },
    {
        "lecture": 3,
        "id": 210,
        "question": "Memory virtualization presents physical memory to applications as a single logical collection of contiguous memory locations.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Memory virtualization abstracts physical memory into a logical space."
    },
    {
        "lecture": 3,
        "id": 211,
        "question": "What manages the virtual memory and the allocation of physical memory to virtual memory?",
        "answers": {
            "a": "Virtual Memory",
            "b": "The operating system (OS)",
            "c": "LVM",
            "d": "VMM"
        },
        "correct": "d",
        "reason": "The Virtual Memory Manager (VMM) handles this task."
    },
    {
        "lecture": 3,
        "id": 212,
        "question": "What is software that runs on a compute system and manages logical and physical storage?",
        "answers": {
            "a": "Virtual Memory",
            "b": "The operating system (OS)",
            "c": "LVM",
            "d": "Processor"
        },
        "correct": "c",
        "reason": "The Logical Volume Manager (LVM) manages storage."
    },
    {
        "lecture": 3,
        "id": 213,
        "question": "What is a collection of related records stored as a single named unit in contiguous logical address space?",
        "answers": {
            "a": "Virtual Memory",
            "b": "The operating system (OS)",
            "c": "LVM",
            "d": "File"
        },
        "correct": "d",
        "reason": "A file is a collection of related records."
    },
    {
        "lecture": 3,
        "id": 214,
        "question": "File systems may be broadly classified as:",
        "answers": {
            "a": "Disk-based file system",
            "b": "Network-based file system",
            "c": "Virtual file system",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "These are the three main types of file systems."
    },
    {
        "lecture": 3,
        "id": 215,
        "question": "A disk-based file system manages the files stored on storage devices such as solid-state drives, disk drives, and optical drives. Examples of disk-based file systems are Microsoft NT File System (NTFS), Apple Hierarchical File System (HFS) Plus, Extended File System family for Linux, Oracle ZFS, and Universal Disk Format (UDF).",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These are examples of disk-based file systems."
    },
    {
        "lecture": 3,
        "id": 216,
        "question": "A network-based file system uses networking to allow file system access between compute systems. Network-based file systems may use either the client-server model, or may be distributed/clustered. In the client-server model, the file system resides on a server, and is accessed by clients over the network.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This describes network-based file systems."
    },
    {
        "lecture": 3,
        "id": 217,
        "question": "What is also known as a tower server, a compute system built in an upright standalone enclosure called a 'tower', which looks similar to a desktop cabinet?",
        "answers": {
            "a": "A tower compute system",
            "b": "A rack-mounted compute system",
            "c": "A blade compute system"
        },
        "correct": "a",
        "reason": "A tower compute system is built in a standalone enclosure."
    },
    {
        "lecture": 3,
        "id": 218,
        "question": "What is also known as a rack server, a compute system designed to be fixed inside a frame called a 'rack'? A rack is a standardized enclosure containing multiple mounting slots called 'bays', each of which holds a server in place with the help of screws.",
        "answers": {
            "a": "A tower compute system",
            "b": "A rack-mounted compute system",
            "c": "A blade compute system"
        },
        "correct": "b",
        "reason": "A rack-mounted compute system is designed to be mounted in a rack."
    },
    {
        "lecture": 3,
        "id": 219,
        "question": "What is also known as a blade server, an electronic circuit board containing only core processing components, such as processor(s), memory, integrated network controllers, storage drive, and essential I/O cards and ports? Each blade server is a self-contained compute system and is typically dedicated to a single application.",
        "answers": {
            "a": "A tower compute system",
            "b": "A rack-mounted compute system",
            "c": "A blade compute system"
        },
        "correct": "c",
        "reason": "A blade compute system is a self-contained compute system on a circuit board."
    },
    {
        "lecture": 3,
        "id": 220,
        "question": "Compute virtualization is the technique of abstracting the physical compute hardware from the operating system and applications, enabling multiple operating systems to run concurrently on a single or clustered physical compute system(s).",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of compute virtualization."
    },
    {
        "lecture": 3,
        "id": 221,
        "question": "Before Virtualization: IT silos and underutilized resources, Inflexible and expensive, Management inefficiencies, Risk of downtime.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "These are challenges faced before virtualization."
    },
    {
        "lecture": 3,
        "id": 222,
        "question": "What software provides a virtualization layer for abstracting compute system hardware and enables the creation of multiple virtual machines?",
        "answers": {
            "a": "Hypervisor",
            "b": "Operating System",
            "c": "Virtual Memory Manager",
            "d": "Logical Volume Manager"
        },
        "correct": "a",
        "reason": "A hypervisor provides the virtualization layer."
    },
    {
        "lecture": 3,
        "id": 223,
        "question": "Hypervisor kernel provides functionality similar to an OS kernel and presents resource requests to physical hardware.",
        "answers": {
            "a": "Provides functionality similar to an OS kernel",
            "b": "Presents resource requests to physical hardware",
            "c": "All of the above"
        },
        "correct": "c",
        "reason": "The hypervisor kernel performs these functions."
    },
    {
        "lecture": 3,
        "id": 224,
        "question": "What stores information such as VM name, BIOS information, guest OS type, memory size?",
        "answers": {
            "a": "Configuration file",
            "b": "Virtual disk file",
            "c": "Memory state file",
            "d": "Snapshot file",
            "e": "Log file"
        },
        "correct": "a",
        "reason": "The configuration file stores VM information."
    },
    {
        "lecture": 3,
        "id": 225,
        "question": "What stores the contents of the VM's disk drive?",
        "answers": {
            "a": "Configuration file",
            "b": "Virtual disk file",
            "c": "Memory state file",
            "d": "Snapshot file",
            "e": "Log file"
        },
        "correct": "b",
        "reason": "The virtual disk file stores the VM's disk drive contents."
    },
    {
        "lecture": 3,
        "id": 226,
        "question": "What stores the memory contents of a VM in a suspended state?",
        "answers": {
            "a": "Configuration file",
            "b": "Virtual disk file",
            "c": "Memory state file",
            "d": "Snapshot file",
            "e": "Log file"
        },
        "correct": "c",
        "reason": "The memory state file stores the VM's suspended memory contents."
    },
    {
        "lecture": 3,
        "id": 227,
        "question": "What stores the VM settings and virtual disk of a VM?",
        "answers": {
            "a": "Configuration file",
            "b": "Virtual disk file",
            "c": "Memory state file",
            "d": "Snapshot file",
            "e": "Log file"
        },
        "correct": "d",
        "reason": "The snapshot file stores the VM's settings and disk."
    },
    {
        "lecture": 3,
        "id": 228,
        "question": "What keeps a log of the VM’s activity and is used in troubleshooting?",
        "answers": {
            "a": "Configuration file",
            "b": "Virtual disk file",
            "c": "Memory state file",
            "d": "Snapshot file",
            "e": "Log file"
        },
        "correct": "e",
        "reason": "The log file records VM activity for troubleshooting."
    },
    {
        "lecture": 3,
        "id": 229,
        "question": "Application virtualization is the technique of decoupling an application from the underlying computing platform (OS and hardware) to enable the application to be used on a compute system without installation.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of application virtualization."
    },
    {
        "lecture": 3,
        "id": 230,
        "question": "What provides a solution to meet an organization’s need for simplified and improved application deployment, delivery, and manageability?",
        "answers": {
            "a": "Simplified application management",
            "b": "Eliminate OS modifications",
            "c": "Resolve application conflicts and compatibility issues",
            "d": "Simplified OS image management",
            "e": "Flexibility of access"
        },
        "correct": "a",
        "reason": "Simplified application management meets these needs."
    },
    {
        "lecture": 3,
        "id": 231,
        "question": "What provides additional security and protects the OS from potential corruptions and problems that may arise due to changes to the file system and registry?",
        "answers": {
            "a": "Simplified application management",
            "b": "Eliminate OS modifications",
            "c": "Resolve application conflicts and compatibility issues",
            "d": "Simplified OS image management",
            "e": "Flexibility of access"
        },
        "correct": "b",
        "reason": "Eliminating OS modifications enhances security."
    },
    {
        "lecture": 3,
        "id": 232,
        "question": "What allows the use of conflicting applications on the same end-point device?",
        "answers": {
            "a": "Simplified application management",
            "b": "Eliminate OS modifications",
            "c": "Resolve application conflicts and compatibility issues",
            "d": "Simplified OS image management",
            "e": "Flexibility of access"
        },
        "correct": "c",
        "reason": "Resolving application conflicts allows conflicting apps to coexist."
    },
    {
        "lecture": 3,
        "id": 233,
        "question": "What simplifies OS image management by separating application delivery from the OS?",
        "answers": {
            "a": "Simplified application management",
            "b": "Eliminate OS modifications",
            "c": "Resolve application conflicts and compatibility issues",
            "d": "Simplified OS image management",
            "e": "Flexibility of access"
        },
        "correct": "d",
        "reason": "Simplified OS image management separates application delivery."
    },
    {
        "lecture": 3,
        "id": 234,
        "question": "What enables an organization’s workforce and customers to access applications hosted on a remote compute system from any location and through diverse end-point devices?",
        "answers": {
            "a": "Simplified application management",
            "b": "Eliminate OS modifications",
            "c": "Resolve application conflicts and compatibility issues",
            "d": "Simplified OS image management",
            "e": "Flexibility of access"
        },
        "correct": "e",
        "reason": "Flexibility of access allows remote application access."
    },
    {
        "lecture": 3,
        "id": 235,
        "question": "Application encapsulation is the process where an application is converted into a standalone, self-contained executable package that may run directly from local drive, USB, or optical disc.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of application encapsulation."
    },
    {
        "lecture": 3,
        "id": 236,
        "question": "Application presentation is the process where an application is hosted and executes remotely, and the application’s UI data is transmitted to the client. A locally-installed agent on the client manages the exchange of UI information with the user’s remote application session.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This describes application presentation."
    },
    {
        "lecture": 3,
        "id": 237,
        "question": "Application streaming is the process where application-specific data is transmitted in portions to clients for local execution. It requires a locally-installed agent, client software, or web browser plugin.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This describes application streaming."
    },
    {
        "lecture": 3,
        "id": 238,
        "question": "What technology decouples the OS, applications, and user state from a physical compute system to create a virtual desktop environment that can be accessed from any client device?",
        "answers": {
            "a": "Compute virtualization",
            "b": "Application virtualization",
            "c": "Desktop virtualization"
        },
        "correct": "c",
        "reason": "Desktop virtualization decouples these components."
    },
    {
        "lecture": 3,
        "id": 239,
        "question": "Desktops are hosted and managed centrally in desktop virtualization.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Centralized hosting is a feature of desktop virtualization."
    },
    {
        "lecture": 3,
        "id": 240,
        "question": "What are the benefits of desktop virtualization?",
        "answers": {
            "a": "Simplified desktop infrastructure management",
            "b": "Improved data protection and compliance",
            "c": "Flexibility of access",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "Desktop virtualization offers all these benefits."
    },
    {
        "lecture": 3,
        "id": 241,
        "question": "A cloud service in which a VDI is hosted by a cloud service provider is called cloud streaming.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "It is called Desktop as a Service (DaaS)."
    },
    {
        "lecture": 3,
        "id": 242,
        "question": "Applications flexibly scale to meet growth in processing and storage needs in cloud streaming.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Cloud streaming enables flexible scaling of applications."
    },
    {
        "lecture": 3,
        "id": 243,
        "question": "In a server-centric storage architecture, storage devices are connected directly to the servers and are typically internal to the server. These storage devices cannot be shared with any other server.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This describes server-centric storage architecture."
    },
    {
        "lecture": 3,
        "id": 244,
        "question": "In a server-centric storage architecture, a server can directly access the unused storage space available on other servers.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A server cannot access unused storage on other servers."
    },
    {
        "lecture": 3,
        "id": 245,
        "question": "In an information-centric architecture, storage devices exist completely independently of servers, and are managed centrally and shared between multiple compute systems.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of information-centric architecture."
    },
    {
        "lecture": 3,
        "id": 246,
        "question": "What is used for information exchange between compute systems and storage systems, and for connecting storage systems? It enables compute systems to share storage resources, improve the utilization of storage systems, and facilitate centralized storage management.",
        "answers": {
            "a": "SAN",
            "b": "LAN",
            "c": "WAN",
            "d": "MAN"
        },
        "correct": "a",
        "reason": "SAN is used for these purposes."
    },
    {
        "lecture": 3,
        "id": 247,
        "question": "What stores data on a circular disk with a ferromagnetic coating?",
        "answers": {
            "a": "Magnetic disk drive",
            "b": "Solid-state (flash) drive",
            "c": "Magnetic tape drive",
            "d": "Optical disc drive"
        },
        "correct": "a",
        "reason": "Magnetic disk drives use ferromagnetic coating for data storage."
    },
    {
        "lecture": 3,
        "id": 248,
        "question": "What stores data on a semiconductor-based memory?",
        "answers": {
            "a": "Magnetic disk drive",
            "b": "Solid-state (flash) drive",
            "c": "Magnetic tape drive",
            "d": "Optical disc drive"
        },
        "correct": "b",
        "reason": "Solid-state drives use semiconductor memory."
    },
    {
        "lecture": 3,
        "id": 249,
        "question": "What stores data on a thin plastic film with a magnetic coating?",
        "answers": {
            "a": "Magnetic disk drive",
            "b": "Solid-state (flash) drive",
            "c": "Magnetic tape drive",
            "d": "Optical disc drive"
        },
        "correct": "c",
        "reason": "Magnetic tape drives use a thin plastic film with magnetic coating."
    },
    {
        "lecture": 3,
        "id": 250,
        "question": "What stores data on a polycarbonate disc with a reflective coating?",
        "answers": {
            "a": "Magnetic disk drive",
            "b": "Solid-state (flash) drive",
            "c": "Magnetic tape drive",
            "d": "Optical disc drive"
        },
        "correct": "d",
        "reason": "Optical disc drives use a polycarbonate disc with reflective coating."
    },
    {
        "lecture": 3,
        "id": 251,
        "question": "Storage virtualization is the technique of abstracting physical storage resources to create virtual storage resources.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of storage virtualization."
    },
    {
        "lecture": 3,
        "id": 252,
        "question": "What refers to the communication paths between IT infrastructure components for information exchange and resource sharing?",
        "answers": {
            "a": "Connectivity",
            "b": "Protocol",
            "c": "Interface",
            "d": "Network"
        },
        "correct": "a",
        "reason": "Connectivity refers to these communication paths."
    },
    {
        "lecture": 3,
        "id": 253,
        "question": "Compute-to-compute connectivity typically uses protocols based on:",
        "answers": {
            "a": "IP",
            "b": "TCP",
            "c": "HTTP",
            "d": "All of the above"
        },
        "correct": "a",
        "reason": "IP-based protocols are commonly used for compute-to-compute connectivity."
    },
    {
        "lecture": 3,
        "id": 254,
        "question": "What is a host interface device that connects a compute system to storage or to a SAN?",
        "answers": {
            "a": "Host bus",
            "b": "Port",
            "c": "Protocol",
            "d": "Host bus adapter (HBA)"
        },
        "correct": "d",
        "reason": "An HBA connects a compute system to storage or SAN."
    },
    {
        "lecture": 3,
        "id": 255,
        "question": "What is a specialized outlet that enables connectivity between the compute system and storage?",
        "answers": {
            "a": "Host bus",
            "b": "Port",
            "c": "Protocol",
            "d": "Interface"
        },
        "correct": "b",
        "reason": "A port enables connectivity between compute and storage."
    },
    {
        "lecture": 3,
        "id": 256,
        "question": "What enables communication between the compute system and storage, implemented using interface devices (or controllers) at both the source and the destination devices?",
        "answers": {
            "a": "Host bus",
            "b": "Port",
            "c": "Protocol",
            "d": "Interface"
        },
        "correct": "c",
        "reason": "A protocol enables this communication."
    },
    {
        "lecture": 3,
        "id": 257,
        "question": "Network virtualization is the technique of abstracting physical network resources to create virtual network resources.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "This is the definition of network virtualization."
    },
    {
        "lecture": 3,
        "id": 258,
        "question": "Network virtualization software is either built into the operating environment of a network device, installed on an independent compute system, or available as a hypervisor’s capability.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Network virtualization software can be implemented in these ways."
    },
    {
        "lecture": 3,
        "id": 259,
        "question": "Network virtualization software has the ability to abstract the physical network resources such as switches and routers to create virtual resources such as virtual switches.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Network virtualization software abstracts physical resources."
    },
    {
        "lecture": 3,
        "id": 260,
        "question": "The IT infrastructure is arranged in three logical layers and five cross-layer functions.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "The IT infrastructure is arranged in five logical layers and three cross-layer functions."
    },
    {
        "lecture": 5,
        "id": 261,
        "question": "What does the front end of a block-based storage system provide?",
        "answers": {
            "a": "Interface between storage system and compute system",
            "b": "Temporary storage for data",
            "c": "Controls data transfers between cache and physical storage"
        },
        "correct": "a",
        "reason": "The front end handles the interface and communication between the storage and compute systems."
    },
    {
        "lecture": 5,
        "id": 262,
        "question": "What is the function of cache in a block-based storage system?",
        "answers": {
            "a": "To store data permanently",
            "b": "To temporarily store data to speed up I/O operations",
            "c": "To control data transfers between cache and storage"
        },
        "correct": "b",
        "reason": "Cache temporarily stores data to reduce the time required to service I/O requests."
    },
    {
        "lecture": 5,
        "id": 263,
        "question": "What is a read cache hit?",
        "answers": {
            "a": "When data is found in the storage drives",
            "b": "When requested data is found in cache",
            "c": "When data is written directly to storage"
        },
        "correct": "b",
        "reason": "A read cache hit occurs when the requested data is already available in cache."
    },
    {
        "lecture": 5,
        "id": 264,
        "question": "Which of the following best describes write-back cache?",
        "answers": {
            "a": "Data is immediately written to storage",
            "b": "Data is placed in cache and later written to storage",
            "c": "Data is not stored at all"
        },
        "correct": "b",
        "reason": "Write-back cache acknowledges data immediately and writes it to storage later."
    },
    {
        "lecture": 5,
        "id": 265,
        "question": "What is cache mirroring?",
        "answers": {
            "a": "Using cache to store temporary data",
            "b": "Storing write data in two different cache locations",
            "c": "Flushing cache data to storage"
        },
        "correct": "b",
        "reason": "Cache mirroring stores write data in two different cache locations to protect against cache failures."
    },
    {
        "lecture": 5,
        "id": 266,
        "question": "What does a high watermark (HWM) indicate in cache management?",
        "answers": {
            "a": "The level at which data is read from cache",
            "b": "The cache utilization level that triggers high-speed flushing",
            "c": "The lowest cache utilization level"
        },
        "correct": "b",
        "reason": "HWM is the cache utilization level at which high-speed flushing of cache data starts."
    },
    {
        "lecture": 5,
        "id": 267,
        "question": "Which algorithm in cache management frees up pages that have not been accessed for a long time?",
        "answers": {
            "a": "Most Recently Used (MRU)",
            "b": "Least Recently Used (LRU)",
            "c": "Round Robin"
        },
        "correct": "b",
        "reason": "LRU algorithm frees up pages that haven't been accessed for a long time."
    },
    {
        "lecture": 5,
        "id": 268,
        "question": "What is the role of back-end controllers in a block-based storage system?",
        "answers": {
            "a": "Interface between compute systems and storage system",
            "b": "Temporary storage for data",
            "c": "Control data transfers between cache and physical storage"
        },
        "correct": "c",
        "reason": "Back-end controllers handle data transfers between cache and physical storage drives."
    },
    {
        "lecture": 5,
        "id": 269,
        "question": "What is a RAID set?",
        "answers": {
            "a": "A single physical drive",
            "b": "A logical group of physical drives with a specific RAID level",
            "c": "A type of cache memory"
        },
        "correct": "b",
        "reason": "A RAID set is a group of physical drives with a specific RAID level for performance and availability."
    },
    {
        "lecture": 5,
        "id": 270,
        "question": "What is the purpose of LUN masking?",
        "answers": {
            "a": "To increase storage capacity",
            "b": "To control which compute systems can access specific LUNs",
            "c": "To improve data transfer speed"
        },
        "correct": "b",
        "reason": "LUN masking controls which compute systems can access specific LUNs, enhancing data security."
    },
    {
        "lecture": 5,
        "id": 271,
        "question": "Which storage provisioning method allows more efficient allocation of storage to compute systems?",
        "answers": {
            "a": "Traditional provisioning",
            "b": "Virtual provisioning",
            "c": "Manual provisioning"
        },
        "correct": "b",
        "reason": "Virtual provisioning allows for more efficient allocation of storage to compute systems."
    },
    {
        "lecture": 5,
        "id": 272,
        "question": "What does the term 'thin LUN' refer to?",
        "answers": {
            "a": "A LUN with more physical storage allocated than presented",
            "b": "A LUN with less physical storage allocated than presented",
            "c": "A LUN with no storage allocated"
        },
        "correct": "b",
        "reason": "Thin LUNs have less physical storage allocated than presented, utilizing shared pool resources."
    },
    {
        "lecture": 5,
        "id": 273,
        "question": "What is MetaLUN?",
        "answers": {
            "a": "A method to expand LUNs by combining two or more LUNs",
            "b": "A type of cache memory",
            "c": "A front-end controller component"
        },
        "correct": "a",
        "reason": "MetaLUNs are created by combining two or more LUNs to expand capacity or performance."
    },
    {
        "lecture": 5,
        "id": 274,
        "question": "Which type of MetaLUN expansion adds additional capacity without performance benefits?",
        "answers": {
            "a": "Striped expansion",
            "b": "Concatenated expansion",
            "c": "Mirrored expansion"
        },
        "correct": "b",
        "reason": "Concatenated expansion adds capacity without performance benefits."
    },
    {
        "lecture": 5,
        "id": 275,
        "question": "What is the main benefit of virtual provisioning?",
        "answers": {
            "a": "It increases the physical size of storage drives",
            "b": "It improves storage capacity utilization",
            "c": "It eliminates the need for RAID"
        },
        "correct": "b",
        "reason": "Virtual provisioning improves storage capacity utilization by using a shared pool."
    },
    {
        "lecture": 5,
        "id": 276,
        "question": "Which type of LUN is best suited for applications with unpredictable storage space needs?",
        "answers": {
            "a": "Traditional LUN",
            "b": "Thin LUN",
            "c": "MetaLUN"
        },
        "correct": "b",
        "reason": "Thin LUNs are ideal for applications with unpredictable storage space requirements."
    },
    {
        "lecture": 5,
        "id": 277,
        "question": "What is the role of a storage pool in virtual provisioning?",
        "answers": {
            "a": "To create RAID sets",
            "b": "To provide physical storage for thin LUNs",
            "c": "To manage cache data"
        },
        "correct": "b",
        "reason": "A storage pool provides the physical storage used by thin LUNs."
    },
    {
        "lecture": 5,
        "id": 278,
        "question": "What does storage pool rebalancing do?",
        "answers": {
            "a": "It creates new LUNs",
            "b": "It reallocates data to balance capacity across all drives",
            "c": "It deletes unused data"
        },
        "correct": "b",
        "reason": "Storage pool rebalancing redistributes data to balance capacity across drives."
    },
    {
        "lecture": 5,
        "id": 279,
        "question": "What is the purpose of a RAID set?",
        "answers": {
            "a": "To store data temporarily",
            "b": "To provide a logical grouping of physical drives for data redundancy and performance",
            "c": "To control access to LUNs"
        },
        "correct": "b",
        "reason": "RAID sets provide data redundancy and performance by grouping physical drives."
    },
    {
        "lecture": 5,
        "id": 280,
        "question": "What is the benefit of using write-back cache?",
        "answers": {
            "a": "Improved write response times",
            "b": "Immediate data write to storage",
            "c": "Reduced cache utilization"
        },
        "correct": "a",
        "reason": "Write-back cache improves write response times by acknowledging writes immediately."
    },
    {
        "lecture": 5,
        "id": 281,
        "question": "Which cache management method is used during high cache utilization?",
        "answers": {
            "a": "Idle flushing",
            "b": "High watermark flushing",
            "c": "Forced flushing"
        },
        "correct": "b",
        "reason": "High watermark flushing is triggered during high cache utilization to free up space."
    },
    {
        "lecture": 5,
        "id": 282,
        "question": "What does a thin LUN allow you to do?",
        "answers": {
            "a": "Use more physical storage than allocated",
            "b": "Use less physical storage than allocated",
            "c": "Create RAID sets"
        },
        "correct": "b",
        "reason": "Thin LUNs allow the use of less physical storage than the amount presented to applications."
    },
    {
        "lecture": 5,
        "id": 283,
        "question": "What is a benefit of cache vaulting?",
        "answers": {
            "a": "Increases cache capacity",
            "b": "Protects cache data during power failures",
            "c": "Improves read response times"
        },
        "correct": "b",
        "reason": "Cache vaulting protects data in cache by saving it to dedicated storage drives during power failures."
    },
    {
        "lecture": 5,
        "id": 284,
        "question": "What happens during cache mirroring?",
        "answers": {
            "a": "Data is written directly to storage",
            "b": "Write data is stored in two different cache locations",
            "c": "Cache data is flushed"
        },
        "correct": "b",
        "reason": "Cache mirroring stores write data in two different cache locations for protection."
    },
    {
        "lecture": 5,
        "id": 285,
        "question": "Which component of the storage system interacts with the compute system?",
        "answers": {
            "a": "Back-end controller",
            "b": "Front-end controller",
            "c": "Cache"
        },
        "correct": "b",
        "reason": "The front-end controller interfaces with the compute system."
    },
    {
        "lecture": 5,
        "id": 286,
        "question": "What is the primary purpose of a storage pool in virtual provisioning?",
        "answers": {
            "a": "To manage cache data",
            "b": "To create LUNs",
            "c": "To provide a shared pool of physical storage"
        },
        "correct": "c",
        "reason": "A storage pool provides a shared pool of physical storage for creating thin LUNs."
    },
    {
        "lecture": 5,
        "id": 287,
        "question": "What is the benefit of using thin provisioning?",
        "answers": {
            "a": "Increased physical storage capacity",
            "b": "Improved storage utilization and cost efficiency",
            "c": "Elimination of RAID requirements"
        },
        "correct": "b",
        "reason": "Thin provisioning improves storage utilization and cost efficiency by avoiding over-provisioning."
    },
    {
        "lecture": 5,
        "id": 288,
        "question": "What is a characteristic of concatenated MetaLUNs?",
        "answers": {
            "a": "Improved performance through striping",
            "b": "Increased capacity without performance benefits",
            "c": "Immediate data write to storage"
        },
        "correct": "b",
        "reason": "Concatenated MetaLUNs increase capacity without improving performance."
    },
    {
        "lecture": 5,
        "id": 289,
        "question": "What type of data does a RAID set typically store?",
        "answers": {
            "a": "Temporary cache data",
            "b": "Logical groups of data with redundancy",
            "c": "Compute system instructions"
        },
        "correct": "b",
        "reason": "RAID sets store logical groups of data with redundancy for performance and availability."
    },
    {
        "lecture": 5,
        "id": 290,
        "question": "Which technique helps in data protection by storing data in multiple locations?",
        "answers": {
            "a": "Cache mirroring",
            "b": "Idle flushing",
            "c": "Back-end controller"
        },
        "correct": "a",
        "reason": "Cache mirroring stores data in multiple locations to protect against cache failures."
    },
    {
        "lecture": 5,
        "id": 291,
        "question": "A block-based storage system provides compute systems with block-level access to the storage volumes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "."
    },
    {
        "lecture": 5,
        "id": 292,
        "question": "Block-based storage systems can either be based on scale-up or scale-out architecture.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "."
    },
    {
        "lecture": 5,
        "id": 293,
        "question": "A controller of a block-based storage system consists of 9 key components.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A controller of a block-based storage system consist of 3 key components."
    },
    {
        "lecture": 5,
        "id": 294,
        "question": "What are the components of a controller in a block-based storage system?",
        "answers": {
            "a": "Front end",
            "b": "Cache",
            "c": "Back end",
            "d": "All the above"
        },
        "correct": "d",
        "reason": "A controller includes the front end, cache, and back end."
    },
    {
        "lecture": 5,
        "id": 295,
        "question": "An I/O request is received from the compute system at the back-end port.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "I/O requests are received at the front-end port, not the back-end."
    },
    {
        "lecture": 5,
        "id": 296,
        "question": "An I/O request is processed through cache and back end.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "I/O requests are indeed processed through the cache and back end."
    },
    {
        "lecture": 5,
        "id": 297,
        "question": "The front end provides the interface between the storage system and the compute system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The front end acts as the interface between the storage system and the compute system."
    },
    {
        "lecture": 5,
        "id": 298,
        "question": "The front end has redundant controllers for low availability.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Redundant controllers are used for high availability, not low."
    },
    {
        "lecture": 5,
        "id": 299,
        "question": "Which components enable large numbers of compute systems to connect to the intelligent storage system?",
        "answers": {
            "a": "Ports",
            "b": "IB",
            "c": "None"
        },
        "correct": "a",
        "reason": "Ports enable multiple compute systems to connect to the storage system."
    },
    {
        "lecture": 5,
        "id": 300,
        "question": "Front-end controllers route data to and from cache via the internal data bus.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Front-end controllers do route data via the internal data bus."
    },
    {
        "lecture": 5,
        "id": 301,
        "question": "Cache is semiconductor memory where data is placed temporarily to reduce the time required to service I/O requests from the compute system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Cache is indeed semiconductor memory used to speed up I/O requests."
    },
    {
        "lecture": 5,
        "id": 302,
        "question": "Cache improves storage system performance by isolating which component from the storage?",
        "answers": {
            "a": "Frontend",
            "b": "Compute systems",
            "c": "Cache port",
            "d": "None"
        },
        "correct": "b",
        "reason": "Cache isolates compute systems from the storage."
    },
    {
        "lecture": 5,
        "id": 303,
        "question": "When a compute system issues a read request and finds the required data is available in cache, this is called...",
        "answers": {
            "a": "Read cache hit",
            "b": "Read miss",
            "c": "None"
        },
        "correct": "a",
        "reason": "A read cache hit occurs when requested data is found in cache."
    },
    {
        "lecture": 5,
        "id": 304,
        "question": "Data is sent directly to the compute system, without any back-end storage operation in a read miss.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Data is sent directly in a read hit, not a read miss."
    },
    {
        "lecture": 5,
        "id": 305,
        "question": "If the requested data is not found in cache, it is called a cache miss and the data must be read from the storage.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "A cache miss occurs when data isn't in cache and must be read from storage."
    },
    {
        "lecture": 5,
        "id": 306,
        "question": "A higher read hit ratio doesn't improve read performance.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A higher read hit ratio actually improves read performance."
    },
    {
        "lecture": 5,
        "id": 307,
        "question": "Write-through cache: Data is placed in the cache and immediately written to the storage.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Write-through cache writes data to storage immediately."
    },
    {
        "lecture": 5,
        "id": 308,
        "question": "Data is placed in cache and an acknowledgment is sent to the compute system immediately in...",
        "answers": {
            "a": "Write-back cache",
            "b": "Write-through cache",
            "c": "Both"
        },
        "correct": "a",
        "reason": "Write-back cache sends an acknowledgment immediately after data is placed in cache."
    },
    {
        "lecture": 5,
        "id": 309,
        "question": "Data that has not been accessed for a while will not be requested by the compute system in...",
        "answers": {
            "a": "Least Recently Used (LRU)",
            "b": "Most Recently Used (MRU)",
            "c": "None"
        },
        "correct": "a",
        "reason": "LRU assumes data not accessed for a while will not be requested soon."
    },
    {
        "lecture": 5,
        "id": 310,
        "question": "Recently accessed data may not be required for a while in...",
        "answers": {
            "a": "Least Recently Used (LRU)",
            "b": "Most Recently Used (MRU)",
            "c": "None"
        },
        "correct": "b",
        "reason": "MRU assumes recently accessed data may not be required soon."
    },
    {
        "lecture": 5,
        "id": 311,
        "question": "What is the process of assigning storage resources to compute systems based on capacity, availability, and performance requirements?",
        "answers": {
            "a": "VM",
            "b": "BMW",
            "c": "Storage provisioning"
        },
        "correct": "c",
        "reason": "Storage provisioning assigns storage resources based on requirements."
    },
    {
        "lecture": 5,
        "id": 312,
        "question": "What is a method to expand LUNs that require additional capacity or performance?",
        "answers": {
            "a": "MetaLUN",
            "b": "Metalan",
            "c": "Lona"
        },
        "correct": "a",
        "reason": "MetaLUNs expand LUNs needing more capacity or performance."
    },
    {
        "lecture": 5,
        "id": 313,
        "question": "A MetaLUN can be created by combining two or more LUNs.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "MetaLUNs are formed by combining multiple LUNs."
    },
    {
        "lecture": 5,
        "id": 314,
        "question": "MetaLUNs can be concatenated or striped.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "MetaLUNs support both concatenation and striping."
    },
    {
        "lecture": 5,
        "id": 315,
        "question": "All LUNs in both concatenated and striped expansion must reside on the same storage drive type.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "."
    },
    {
        "lecture": 5,
        "id": 316,
        "question": "All LUNs in both concatenated and striped expansion must reside on the same storage drive type like...",
        "answers": {
            "a": "All SSDs",
            "b": "Fibre Channel",
            "c": "All ATA",
            "d": "All the above"
        },
        "correct": "d",
        "reason": "LUNs in expansions must be on the same drive type like SSDs, Fibre Channel, or ATA."
    },
    {
        "lecture": 5,
        "id": 317,
        "question": "What enables creating and presenting a LUN with more capacity than is physically allocated to it on the storage system?",
        "answers": {
            "a": "Provisioning",
            "b": "Virtual provisioning",
            "c": "MetaLUN"
        },
        "correct": "b",
        "reason": "Virtual provisioning allows LUNs to present more capacity than physically allocated."
    },
    {
        "lecture": 5,
        "id": 318,
        "question": "The LUN created using virtual provisioning is called a thin LUN.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Thin LUNs are created using virtual provisioning."
    },
    {
        "lecture": 5,
        "id": 319,
        "question": "Thin LUNs require physical storage to be completely allocated to them at the time they are created and presented to a compute system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Thin LUNs do not need full physical allocation at creation time."
    },
    {
        "lecture": 5,
        "id": 320,
        "question": "A shared pool in virtual provisioning is analogous to a RAID set, which is a collection of drives on which LUNs are created.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "A shared pool is similar to a RAID set in virtual provisioning."
    },
    {
        "lecture": 5,
        "id": 321,
        "question": "A shared pool can't be shared by multiple thin LUNs.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A shared pool can be shared by multiple thin LUNs."
    },
    {
        "lecture": 5,
        "id": 322,
        "question": "Thin LUNs are appropriate for applications that can tolerate performance variations.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Thin LUNs are suitable for applications that can handle performance variations."
    },
    {
        "lecture": 5,
        "id": 323,
        "question": "What is a process that provides data access control by defining which LUNs a compute system can access?",
        "answers": {
            "a": "LUN masking",
            "b": "LUN provisioning",
            "c": "Both"
        },
        "correct": "a",
        "reason": "LUN masking controls access to LUNs by defining which compute systems can access them."
    },
    {
        "lecture": 5,
        "id": 324,
        "question": "The LUN masking function is implemented on the storage system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "LUN masking is implemented on the storage system."
    },
    {
        "lecture": 6,
        "id": 325,
        "question": "What is the primary function of a NAS system?",
        "answers": {
            "a": "To provide block-level access to storage",
            "b": "To provide file-level access to storage",
            "c": "To manage virtual machines"
        },
        "correct": "b",
        "reason": "NAS systems are optimized for file-level access."
    },
    {
        "lecture": 6,
        "id": 326,
        "question": "Which protocols are commonly used by NAS systems for file sharing?",
        "answers": {
            "a": "FTP and HTTP",
            "b": "CIFS and NFS",
            "c": "SMTP and IMAP"
        },
        "correct": "b",
        "reason": "CIFS and NFS are standard file-sharing protocols for NAS."
    },
    {
        "lecture": 6,
        "id": 327,
        "question": "What does CIFS stand for?",
        "answers": {
            "a": "Common Internet File System",
            "b": "Central Internet File Storage",
            "c": "Common Internal File Storage"
        },
        "correct": "a",
        "reason": "CIFS is a protocol for network file access."
    },
    {
        "lecture": 6,
        "id": 328,
        "question": "What is the main benefit of using NAS over multiple file servers?",
        "answers": {
            "a": "Server consolidation",
            "b": "Faster internet speed",
            "c": "Better email management"
        },
        "correct": "a",
        "reason": "NAS consolidates storage, making management easier."
    },
    {
        "lecture": 6,
        "id": 329,
        "question": "Which component is NOT part of a NAS system?",
        "answers": {
            "a": "Controller",
            "b": "Storage",
            "c": "Hypervisor"
        },
        "correct": "c",
        "reason": "NAS systems do not use hypervisors."
    },
    {
        "lecture": 6,
        "id": 330,
        "question": "What is the function of a NAS controller?",
        "answers": {
            "a": "To manage compute resources",
            "b": "To handle file serving operations",
            "c": "To perform database transactions"
        },
        "correct": "b",
        "reason": "The NAS controller manages file serving."
    },
    {
        "lecture": 6,
        "id": 331,
        "question": "What type of storage devices can a NAS system support?",
        "answers": {
            "a": "Only SSDs",
            "b": "SSDs, SAS, and SATA drives",
            "c": "Only HDDs"
        },
        "correct": "b",
        "reason": "NAS systems can use SSDs, SAS, and SATA drives."
    },
    {
        "lecture": 6,
        "id": 332,
        "question": "Which NAS architecture allows for scaling by adding more nodes?",
        "answers": {
            "a": "Scale-up",
            "b": "Scale-down",
            "c": "Scale-out"
        },
        "correct": "c",
        "reason": "Scale-out NAS adds nodes for scaling."
    },
    {
        "lecture": 6,
        "id": 333,
        "question": "What is a key feature of the scale-out NAS architecture?",
        "answers": {
            "a": "Fixed capacity",
            "b": "Unlimited scalability",
            "c": "Single-node operation"
        },
        "correct": "b",
        "reason": "Scale-out NAS can scale without fixed limits."
    },
    {
        "lecture": 6,
        "id": 334,
        "question": "What type of file system does HDFS provide?",
        "answers": {
            "a": "Distributed file system",
            "b": "Local file system",
            "c": "Hierarchical file system"
        },
        "correct": "a",
        "reason": "HDFS is a distributed file system."
    },
    {
        "lecture": 6,
        "id": 335,
        "question": "Which component acts as the master in HDFS architecture?",
        "answers": {
            "a": "DataNode",
            "b": "NameNode",
            "c": "MetaNode"
        },
        "correct": "b",
        "reason": "The NameNode acts as the master in HDFS."
    },
    {
        "lecture": 6,
        "id": 336,
        "question": "In NFS, what does RPC stand for?",
        "answers": {
            "a": "Remote Procedure Call",
            "b": "Random Process Control",
            "c": "Real-time Protocol Communication"
        },
        "correct": "a",
        "reason": "RPC stands for Remote Procedure Call."
    },
    {
        "lecture": 6,
        "id": 337,
        "question": "Which version of NFS is stateful?",
        "answers": {
            "a": "NFSv2",
            "b": "NFSv3",
            "c": "NFSv4"
        },
        "correct": "c",
        "reason": "NFSv4 is a stateful protocol."
    },
    {
        "lecture": 6,
        "id": 338,
        "question": "What is the primary protocol used by FTP?",
        "answers": {
            "a": "UDP",
            "b": "TCP",
            "c": "IP"
        },
        "correct": "b",
        "reason": "FTP uses TCP for data transfer."
    },
    {
        "lecture": 6,
        "id": 339,
        "question": "What does the P2P file-sharing model stand for?",
        "answers": {
            "a": "Point-to-Point",
            "b": "Peer-to-Peer",
            "c": "Private-to-Public"
        },
        "correct": "b",
        "reason": "P2P stands for Peer-to-Peer."
    },
    {
        "lecture": 6,
        "id": 340,
        "question": "What is the function of the NAS management software in an integrated NAS system?",
        "answers": {
            "a": "Manage block storage",
            "b": "Perform administrative tasks for NAS head and storage",
            "c": "Handle network routing"
        },
        "correct": "b",
        "reason": "NAS management software handles NAS head and storage admin tasks."
    },
    {
        "lecture": 6,
        "id": 341,
        "question": "What type of network does scale-out NAS use for intra-cluster communication?",
        "answers": {
            "a": "External Ethernet network",
            "b": "Internal network",
            "c": "Public internet"
        },
        "correct": "b",
        "reason": "Scale-out NAS uses an internal network for intra-cluster communication."
    },
    {
        "lecture": 6,
        "id": 342,
        "question": "What technology is often used in scale-out NAS for high-speed networking?",
        "answers": {
            "a": "Fiber optics",
            "b": "InfiniBand",
            "c": "Bluetooth"
        },
        "correct": "b",
        "reason": "InfiniBand is used for high-speed networking in scale-out NAS."
    },
    {
        "lecture": 6,
        "id": 343,
        "question": "What is the purpose of clustering in NAS systems?",
        "answers": {
            "a": "To reduce power consumption",
            "b": "To enhance high availability, scalability, and performance",
            "c": "To manage virtual machines"
        },
        "correct": "b",
        "reason": "Clustering enhances availability, scalability, and performance."
    },
    {
        "lecture": 6,
        "id": 344,
        "question": "What feature of CIFS ensures data integrity?",
        "answers": {
            "a": "File and record locking",
            "b": "Random data checks",
            "c": "Automated backups"
        },
        "correct": "a",
        "reason": "CIFS uses file and record locking to ensure data integrity."
    },
    {
        "lecture": 6,
        "id": 345,
        "question": "Which version of NFS supports parallel NFS (pNFS)?",
        "answers": {
            "a": "NFSv2",
            "b": "NFSv3",
            "c": "NFSv4.1"
        },
        "correct": "c",
        "reason": "NFSv4.1 includes support for parallel NFS (pNFS)."
    },
    {
        "lecture": 6,
        "id": 346,
        "question": "What is the main advantage of scale-out NAS over scale-up NAS?",
        "answers": {
            "a": "Higher initial cost",
            "b": "Unlimited scalability",
            "c": "Simpler management"
        },
        "correct": "b",
        "reason": "Scale-out NAS provides unlimited scalability."
    },
    {
        "lecture": 6,
        "id": 347,
        "question": "What does the term 'InfiniBand' refer to?",
        "answers": {
            "a": "A storage protocol",
            "b": "A high-speed networking technology",
            "c": "A type of hard drive"
        },
        "correct": "b",
        "reason": "InfiniBand is a high-speed networking technology."
    },
    {
        "lecture": 6,
        "id": 348,
        "question": "Which protocol is commonly used in Hadoop Distributed File System (HDFS)?",
        "answers": {
            "a": "UDP",
            "b": "TCP/IP",
            "c": "SMTP"
        },
        "correct": "b",
        "reason": "HDFS uses TCP/IP protocol."
    },
    {
        "lecture": 6,
        "id": 349,
        "question": "What type of protocol is CIFS considered to be?",
        "answers": {
            "a": "Stateless protocol",
            "b": "Stateful protocol",
            "c": "Connectionless protocol"
        },
        "correct": "b",
        "reason": "CIFS is a stateful protocol."
    },
    {
        "lecture": 6,
        "id": 350,
        "question": "What is a key feature of NFSv3 compared to earlier versions?",
        "answers": {
            "a": "Uses TCP only",
            "b": "Supports 64-bit file sizes",
            "c": "Locks files automatically"
        },
        "correct": "b",
        "reason": "NFSv3 supports 64-bit file sizes."
    },
    {
        "lecture": 6,
        "id": 351,
        "question": "Which file-sharing protocol is typically used in UNIX systems?",
        "answers": {
            "a": "CIFS",
            "b": "NFS",
            "c": "HTTP"
        },
        "correct": "b",
        "reason": "NFS is commonly used in UNIX systems."
    },
    {
        "lecture": 6,
        "id": 352,
        "question": "What does the internal network in a scale-out NAS system provide?",
        "answers": {
            "a": "Intra-cluster communication",
            "b": "Public internet access",
            "c": "User data storage"
        },
        "correct": "a",
        "reason": "The internal network in scale-out NAS provides intra-cluster communication."
    },
    {
        "lecture": 6,
        "id": 353,
        "question": "How does HDFS handle data storage?",
        "answers": {
            "a": "Stores data in a single central location",
            "b": "Distributes data across multiple nodes",
            "c": "Uses cloud storage"
        },
        "correct": "b",
        "reason": "HDFS distributes data across multiple nodes."
    },
    {
        "lecture": 6,
        "id": 354,
        "question": "What role does the NameNode play in HDFS?",
        "answers": {
            "a": "Stores user data",
            "b": "Manages file system namespace",
            "c": "Handles file transfers"
        },
        "correct": "b",
        "reason": "The NameNode manages the file system namespace."
    },
    {
        "lecture": 6,
        "id": 355,
        "question": "What enables users to share files with other users?",
        "answers": {
            "a": "lunmeta",
            "b": "File sharing",
            "c": "both"
        },
        "correct": "b",
        "reason": "File sharing allows users to access and share files."
    },
    {
        "lecture": 6,
        "id": 356,
        "question": "A user who creates the file determines the type of access (such as read, write, execute, append, delete) to be given to other users.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "."
    },
    {
        "lecture": 6,
        "id": 357,
        "question": "Examples of file-sharing methods include:",
        "answers": {
            "a": "P2P",
            "b": "FTP",
            "c": "DFS",
            "d": "all of the above"
        },
        "correct": "d",
        "reason": "All listed methods are examples of file-sharing."
    },
    {
        "lecture": 6,
        "id": 358,
        "question": "Client-server models that use file-sharing protocols such as NFS and CIFS are not examples of file-sharing methods.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "This statement is false; NFS and CIFS are examples of file-sharing methods."
    },
    {
        "lecture": 6,
        "id": 359,
        "question": "FTP is a client-server protocol that enables data transfer over a network.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "."
    },
    {
        "lecture": 6,
        "id": 360,
        "question": "An FTP server and an FTP client communicate with each other using _____ as the transport protocol.",
        "answers": {
            "a": "TCP",
            "b": "UDP",
            "c": "IP"
        },
        "correct": "a",
        "reason": "FTP uses TCP for data transfer."
    },
    {
        "lecture": 6,
        "id": 361,
        "question": "Which is a file system that is distributed across several compute systems?",
        "answers": {
            "a": "P2P",
            "b": "FTP",
            "c": "DFS",
            "d": "all of the above"
        },
        "correct": "c",
        "reason": "DFS is distributed across multiple compute systems."
    },
    {
        "lecture": 6,
        "id": 362,
        "question": "Client-server file-sharing protocols include:",
        "answers": {
            "a": "P2P",
            "b": "FTP",
            "c": "NFS"
        },
        "correct": "c",
        "reason": "NFS is a client-server file-sharing protocol."
    },
    {
        "lecture": 6,
        "id": 363,
        "question": "What is a dedicated, high-performance file sharing and storage device?",
        "answers": {
            "a": "UDP",
            "b": "NAS",
            "c": "all"
        },
        "correct": "b",
        "reason": "NAS is a dedicated device for file sharing and storage."
    },
    {
        "lecture": 6,
        "id": 364,
        "question": "NAS cannot provide the advantages of server consolidation by eliminating the need for multiple file servers.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "This statement is false; NAS can consolidate servers."
    },
    {
        "lecture": 6,
        "id": 365,
        "question": "A NAS device uses its own operating system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "NAS devices have their own optimized operating systems."
    },
    {
        "lecture": 6,
        "id": 366,
        "question": "A NAS device is optimized for file-serving functions such as:",
        "answers": {
            "a": "storing",
            "b": "retrieving",
            "c": "accessing files",
            "d": "all of the above"
        },
        "correct": "d",
        "reason": "NAS devices are optimized for all listed file-serving functions."
    },
    {
        "lecture": 6,
        "id": 367,
        "question": "The clustering feature enables multiple NAS controllers/heads/nodes to function as a single entity.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Clustering allows NAS nodes to work as one unit."
    },
    {
        "lecture": 6,
        "id": 368,
        "question": "A NAS system consists of 4 components.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "This statement is false; a NAS system typically consists of a controller and storage."
    },
    {
        "lecture": 6,
        "id": 369,
        "question": "A controller is a compute system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The controller is a specialized compute system for NAS."
    },
    {
        "lecture": 6,
        "id": 370,
        "question": "A NAS controller contains components such as:",
        "answers": {
            "a": "network",
            "b": "memory",
            "c": "CPU resources",
            "d": "all of the above"
        },
        "correct": "d",
        "reason": "NAS controllers have network, memory, and CPU resources."
    },
    {
        "lecture": 6,
        "id": 371,
        "question": "The NAS system may have different types of storage devices.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "NAS systems can use various storage devices."
    },
    {
        "lecture": 6,
        "id": 372,
        "question": "The NAS system may not support SSD, SAS, and SATA in a single system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "This statement is false; NAS systems can support SSD, SAS, and SATA."
    },
    {
        "lecture": 6,
        "id": 373,
        "question": "There are two types of NAS architectures: scale-up and scale-out.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "NAS architectures include scale-up and scale-out types."
    },
    {
        "lecture": 6,
        "id": 374,
        "question": "A scale-up NAS architecture provides the capability to scale the capacity and performance of a single NAS system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Scale-up NAS scales a single system's capacity and performance."
    },
    {
        "lecture": 6,
        "id": 375,
        "question": "NAS systems have a _____ capacity ceiling, which limits their scalability.",
        "answers": {
            "a": "fixed",
            "b": "shaked",
            "c": "none"
        },
        "correct": "a",
        "reason": "Scale-up NAS systems have a fixed capacity ceiling."
    },
    {
        "lecture": 6,
        "id": 376,
        "question": "There are 8 types of scale-up NAS.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "This statement is false; there are typically two types: integrated and gateway."
    },
    {
        "lecture": 6,
        "id": 377,
        "question": "Types of scale-up NAS include:",
        "answers": {
            "a": "integrated NAS",
            "b": "security NAS",
            "c": "none"
        },
        "correct": "a",
        "reason": "Integrated NAS is a type of scale-up NAS."
    },
    {
        "lecture": 6,
        "id": 378,
        "question": "A gateway NAS system contains one or more NAS heads and storage in a single system.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Gateway NAS uses external storage, not single system storage."
    },
    {
        "lecture": 6,
        "id": 379,
        "question": "Storage in NAS may consist of different drive types such as:",
        "answers": {
            "a": "SAS",
            "b": "ATA",
            "c": "both a & b"
        },
        "correct": "c",
        "reason": "NAS storage can include SAS and ATA drives."
    },
    {
        "lecture": 6,
        "id": 380,
        "question": "Each NAS head in an integrated NAS has front-end Ethernet ports.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Integrated NAS heads have front-end Ethernet ports."
    },
    {
        "lecture": 6,
        "id": 381,
        "question": "NAS heads have front-end Ethernet ports, which connect to the _____ network.",
        "answers": {
            "a": "UDP",
            "b": "IP",
            "c": "both"
        },
        "correct": "b",
        "reason": "NAS front-end ports connect to the IP network."
    },
    {
        "lecture": 6,
        "id": 382,
        "question": "Each NAS head has front-end ports to provide connectivity to the attached storage.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "."
    },
    {
        "lecture": 6,
        "id": 383,
        "question": "The storage may consist of different drive types, such as SAS, ATA, FC, and solid-state drives, to meet different workload requirements.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "NAS can use various drive types for different workloads."
    },
    {
        "lecture": 6,
        "id": 384,
        "question": "The scale-out NAS implementation pools multiple NAS nodes together in a cluster.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Scale-out NAS clusters multiple NAS nodes."
    },

    {
        "lecture": 9,
        "id": 385,
        "question": "What does SAN stand for?",
        "answers": {
            "a": "Storage Area Network",
            "b": "Secure Access Network",
            "c": "Software Application Network"
        },
        "correct": "a",
        "reason": "SAN stands for Storage Area Network, which connects storage systems to compute systems."
    },
    {
        "lecture": 9,
        "id": 386,
        "question": "What type of storage access does SAN typically provide?",
        "answers": {
            "a": "File-based",
            "b": "Block-based",
            "c": "Object-based"
        },
        "correct": "b",
        "reason": "SAN typically provides access to block-based storage systems."
    },
    {
        "lecture": 9,
        "id": 387,
        "question": "Which environment does SAN address the limitations of?",
        "answers": {
            "a": "Cloud",
            "b": "Direct-Attached Storage (DAS)",
            "c": "Local Area Network (LAN)"
        },
        "correct": "b",
        "reason": "SAN addresses the limitations of Direct-Attached Storage (DAS) environments."
    },
    {
        "lecture": 9,
        "id": 388,
        "question": "Which of the following is NOT a benefit of SAN?",
        "answers": {
            "a": "Centralized storage management",
            "b": "Improved storage utilization",
            "c": "High cost and complexity"
        },
        "correct": "c",
        "reason": "SAN reduces cost and complexity through centralized storage management and improved storage utilization."
    },
    {
        "lecture": 9,
        "id": 389,
        "question": "What is a key requirement for SAN in the third platform?",
        "answers": {
            "a": "Low performance",
            "b": "High scalability",
            "c": "Limited availability"
        },
        "correct": "b",
        "reason": "Third platform applications require high performance, scalability, and availability."
    },
    {
        "lecture": 9,
        "id": 390,
        "question": "Which technology is used to meet third platform requirements for SAN?",
        "answers": {
            "a": "Software-defined networking",
            "b": "Traditional networking",
            "c": "Local Area Network"
        },
        "correct": "a",
        "reason": "Software-defined networking helps meet third platform requirements for SAN."
    },
    {
        "lecture": 9,
        "id": 391,
        "question": "What does SDN stand for in the context of SAN?",
        "answers": {
            "a": "Storage-Defined Networking",
            "b": "Software-Defined Networking",
            "c": "Secure Data Network"
        },
        "correct": "b",
        "reason": "SDN stands for Software-Defined Networking, which abstracts and separates control plane functions from data plane functions."
    },
    {
        "lecture": 9,
        "id": 392,
        "question": "What is the function of the data plane in a traditional network component?",
        "answers": {
            "a": "Provides programming logic",
            "b": "Transfers network traffic",
            "c": "Manages storage resources"
        },
        "correct": "b",
        "reason": "The data plane transfers network traffic from one physical port to another."
    },
    {
        "lecture": 9,
        "id": 393,
        "question": "Which component takes over control functions in a software-defined network?",
        "answers": {
            "a": "Network adapter",
            "b": "Network controller",
            "c": "FC switch"
        },
        "correct": "b",
        "reason": "In a software-defined network, the network controller takes over control functions."
    },
    {
        "lecture": 9,
        "id": 394,
        "question": "What is one benefit of software-defined networking in SAN?",
        "answers": {
            "a": "Decentralized control",
            "b": "Centralized control",
            "c": "Manual configuration"
        },
        "correct": "b",
        "reason": "Software-defined networking provides centralized control for the entire SAN infrastructure."
    },
    {
        "lecture": 9,
        "id": 395,
        "question": "What does FC stand for in FC SAN?",
        "answers": {
            "a": "File Channel",
            "b": "Fibre Channel",
            "c": "Fast Channel"
        },
        "correct": "b",
        "reason": "FC stands for Fibre Channel, which is used for communication in SAN."
    },
    {
        "lecture": 9,
        "id": 396,
        "question": "Which FC SAN component encapsulates OS or hypervisor storage I/Os into FC frames?",
        "answers": {
            "a": "Network controller",
            "b": "FC HBA",
            "c": "Storage adapter"
        },
        "correct": "b",
        "reason": "An FC HBA encapsulates OS or hypervisor storage I/Os into FC frames."
    },
    {
        "lecture": 9,
        "id": 397,
        "question": "What type of cables are primarily used in FC SAN implementations?",
        "answers": {
            "a": "Copper cables",
            "b": "Optical fiber cables",
            "c": "Ethernet cables"
        },
        "correct": "b",
        "reason": "Optical fiber cables are primarily used in FC SAN implementations."
    },
    {
        "lecture": 9,
        "id": 398,
        "question": "What is the maximum distance a single-mode fiber (SMF) cable can typically cover?",
        "answers": {
            "a": "10 meters",
            "b": "100 meters",
            "c": "10 kilometers"
        },
        "correct": "c",
        "reason": "A single-mode fiber (SMF) cable can typically cover distances up to 10 kilometers."
    },
    {
        "lecture": 9,
        "id": 399,
        "question": "What is the function of an FC switch in a SAN?",
        "answers": {
            "a": "Physically connects nodes in a logical loop",
            "b": "Directly routes data from one physical port to another",
            "c": "Encapsulates storage I/Os into FC frames"
        },
        "correct": "b",
        "reason": "An FC switch directly routes data from one physical port to another."
    },
    {
        "lecture": 9,
        "id": 400,
        "question": "Which FC interconnectivity option provides a dedicated connection for data transmission between nodes?",
        "answers": {
            "a": "Point-to-point",
            "b": "FC-AL",
            "c": "FC-SW"
        },
        "correct": "a",
        "reason": "Point-to-point configuration provides a dedicated connection for data transmission between nodes."
    },
    {
        "lecture": 9,
        "id": 401,
        "question": "What does FC-AL stand for?",
        "answers": {
            "a": "Fibre Channel Arbitrated Loop",
            "b": "Fast Channel Automatic Loop",
            "c": "File Channel Advanced Link"
        },
        "correct": "a",
        "reason": "FC-AL stands for Fibre Channel Arbitrated Loop."
    },
    {
        "lecture": 9,
        "id": 402,
        "question": "In which FC interconnectivity option do nodes share a loop?",
        "answers": {
            "a": "Point-to-point",
            "b": "FC-AL",
            "c": "FC-SW"
        },
        "correct": "b",
        "reason": "In FC-AL, nodes share a loop and contend for I/O operations."
    },
    {
        "lecture": 9,
        "id": 403,
        "question": "Which FC interconnectivity option involves a network of FC switches?",
        "answers": {
            "a": "Point-to-point",
            "b": "FC-AL",
            "c": "FC-SW"
        },
        "correct": "c",
        "reason": "FC-SW involves a single FC switch or a network of FC switches."
    },
    {
        "lecture": 9,
        "id": 404,
        "question": "What is the purpose of an E_Port in FC SAN?",
        "answers": {
            "a": "To connect an end device to a switch",
            "b": "To form the connection between two FC switches",
            "c": "To connect a node port to a switch"
        },
        "correct": "b",
        "reason": "An E_Port forms the connection between two FC switches."
    },
    {
        "lecture": 9,
        "id": 405,
        "question": "Which port in FC SAN is known as the node port?",
        "answers": {
            "a": "N_Port",
            "b": "E_Port",
            "c": "F_Port"
        },
        "correct": "a",
        "reason": "N_Port is known as the node port."
    },
    {
        "lecture": 9,
        "id": 406,
        "question": "Which port in FC SAN connects an N_Port to a switch?",
        "answers": {
            "a": "E_Port",
            "b": "F_Port",
            "c": "G_Port"
        },
        "correct": "b",
        "reason": "F_Port connects an N_Port to a switch."
    },
    {
        "lecture": 9,
        "id": 407,
        "question": "Which FC port can operate as either an E_Port or an F_Port?",
        "answers": {
            "a": "G_Port",
            "b": "H_Port",
            "c": "I_Port"
        },
        "correct": "a",
        "reason": "G_Port can operate as either an E_Port or an F_Port."
    },
    {
        "lecture": 9,
        "id": 408,
        "question": "What is the primary role of zoning in an FC SAN?",
        "answers": {
            "a": "To reduce network latency",
            "b": "To restrict access between devices",
            "c": "To improve data transfer speeds"
        },
        "correct": "b",
        "reason": "Zoning restricts access between devices in an FC SAN."
    },
    {
        "lecture": 9,
        "id": 409,
        "question": "What is a key benefit of using SAN for storage management?",
        "answers": {
            "a": "Decentralized storage management",
            "b": "Centralized storage management",
            "c": "Manual configuration"
        },
        "correct": "b",
        "reason": "SAN provides centralized storage management, improving efficiency."
    },
    {
        "lecture": 9,
        "id": 410,
        "question": "What does an FC hub do in a SAN?",
        "answers": {
            "a": "Directly routes data from one port to another",
            "b": "Physically connects nodes in a logical loop",
            "c": "Encapsulates storage I/Os into FC frames"
        },
        "correct": "b",
        "reason": "An FC hub physically connects nodes in a logical loop."
    },
    {
        "lecture": 9,
        "id": 411,
        "question": "What is the main advantage of an FC-SW topology?",
        "answers": {
            "a": "Low scalability",
            "b": "High scalability",
            "c": "Limited connectivity"
        },
        "correct": "b",
        "reason": "FC-SW topology provides high scalability for SAN environments."
    },
    {
        "lecture": 9,
        "id": 412,
        "question": "Which term describes the weakening of the signal in a multimode fiber?",
        "answers": {
            "a": "Modal dispersion",
            "b": "Signal attenuation",
            "c": "Optical loss"
        },
        "correct": "a",
        "reason": "Modal dispersion describes the weakening of the signal in a multimode fiber."
    },
    {
        "lecture": 9,
        "id": 413,
        "question": "What does the control plane in a traditional network manage?",
        "answers": {
            "a": "Data traffic",
            "b": "Network topology",
            "c": "Physical connections"
        },
        "correct": "b",
        "reason": "The control plane manages the network topology in a traditional network."
    },
    {
        "lecture": 9,
        "id": 414,
        "question": "Which FC SAN component is responsible for encapsulating storage I/Os?",
        "answers": {
            "a": "FC HBA",
            "b": "FC switch",
            "c": "FC hub"
        },
        "correct": "a",
        "reason": "An FC HBA encapsulates storage I/Os into FC frames."
    },
    {
        "lecture": 9,
        "id": 415,
        "question": "Which type of fiber is suitable for short-distance data transfer?",
        "answers": {
            "a": "Multimode fiber (MMF)",
            "b": "Single-mode fiber (SMF)",
            "c": "Copper cables"
        },
        "correct": "a",
        "reason": "Multimode fiber (MMF) is suitable for short-distance data transfer."
    },
    {
        "lecture": 9,
        "id": 416,
        "question": "What primarily connects the storage systems with the compute systems?",
        "answers": {
            "a": "Storage area network (SAN)",
            "b": "NAS",
            "c": "None"
        },
        "correct": "a",
        "reason": "SAN connects the storage systems with the compute systems."
    },
    {
        "lecture": 9,
        "id": 417,
        "question": "SAN enables multiple compute systems to access and share storage resources.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "SAN allows multiple compute systems to share storage resources."
    },
    {
        "lecture": 9,
        "id": 418,
        "question": "SAN also enables data transfer between the storage systems.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "SAN enables data transfer between storage systems."
    },
    {
        "lecture": 9,
        "id": 419,
        "question": "A SAN provides access to block-based storage systems.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "SAN provides access to block-based storage systems."
    },
    {
        "lecture": 9,
        "id": 420,
        "question": "SANs enable both consolidation and sharing of storage resources across multiple compute systems.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "SANs enable consolidation and sharing of storage resources."
    },
    {
        "lecture": 9,
        "id": 421,
        "question": "Benefits of SAN reduce the utilization of storage resources compared to a DAS environment.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "SAN improves utilization of storage resources compared to DAS."
    },
    {
        "lecture": 9,
        "id": 422,
        "question": "Using DAS made storage management becomes centralized and less complex, reducing the cost of managing information.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "SAN, not DAS, centralizes storage management and reduces complexity."
    },
    {
        "lecture": 9,
        "id": 423,
        "question": "Which connectivity enables the replication of data between storage systems that reside in separate locations?",
        "answers": {
            "a": "DAS",
            "b": "Long-distance SAN",
            "c": "None"
        },
        "correct": "b",
        "reason": "Long-distance SAN enables replication between geographically separate storage systems."
    },
    {
        "lecture": 9,
        "id": 424,
        "question": "The replication over long distances does not help in protecting data against local and regional disasters.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Long-distance replication helps protect data against local and regional disasters."
    },
    {
        "lecture": 9,
        "id": 425,
        "question": "The long-distance SAN connectivity facilitates remote backup of application data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Long-distance SAN connectivity allows for remote backups."
    },
    {
        "lecture": 9,
        "id": 426,
        "question": "Backup data cannot be transferred through a SAN to a backup device that may reside at a remote location.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Backup data can be transferred through SAN to a remote backup device."
    },
    {
        "lecture": 9,
        "id": 427,
        "question": "One of the platform requirements for SAN is high throughput.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "High throughput is a requirement for third platform applications."
    },
    {
        "lecture": 9,
        "id": 428,
        "question": "One of the platform requirements for SAN is flexibility.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Flexibility is a key requirement for third platform applications."
    },
    {
        "lecture": 9,
        "id": 429,
        "question": "One of the platform requirements for SAN is simplified management.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Simplified management is necessary for third platform applications."
    },
    {
        "lecture": 9,
        "id": 430,
        "question": "Technology solutions that can meet the third platform requirements for SANs are:",
        "answers": {
            "a": "Software-defined networking",
            "b": "SAN implementation",
            "c": "Virtualization in SAN",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "All these technologies meet the third platform requirements for SAN."
    },
    {
        "lecture": 9,
        "id": 431,
        "question": "SAN implementations include:",
        "answers": {
            "a": "Fibre Channel (FC)",
            "b": "Internet Protocol (IP)",
            "c": "All of the above"
        },
        "correct": "c",
        "reason": "SAN implementations can include FC, IP, and other protocols."
    },
    {
        "lecture": 9,
        "id": 432,
        "question": "Fibre Channel over Ethernet (FCoE) is a type of SAN implementation.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FCoE is a type of SAN implementation."
    },
    {
        "lecture": 9,
        "id": 433,
        "question": "A router consists of a data plane only.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "A router consists of both a data plane and a control plane."
    },
    {
        "lecture": 9,
        "id": 434,
        "question": "The control plane transfers the network traffic from one physical port to another port by following rules programmed into the component.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "The data plane transfers network traffic; the control plane provides programming logic."
    },
    {
        "lecture": 9,
        "id": 435,
        "question": "What provides the programming logic that the data plane follows for switching or routing of network traffic?",
        "answers": {
            "a": "Data plane",
            "b": "Control plane"
        },
        "correct": "b",
        "reason": "The control plane provides the programming logic for network traffic."
    },
    {
        "lecture": 9,
        "id": 436,
        "question": "Software-defined networking is an approach to abstract and separate the control plane functions from the data plane functions.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "SDN abstracts and separates control plane functions from data plane functions."
    },
    {
        "lecture": 9,
        "id": 437,
        "question": "The software in software-defined networking runs on a compute system or a standalone device and is called a network controller.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The network controller runs on a compute system or standalone device."
    },
    {
        "lecture": 9,
        "id": 438,
        "question": "The network controller interacts with the network components to gather configuration information and provide instructions for data plane to handle the network traffic.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The network controller gathers configuration info and provides instructions to the data plane."
    },
    {
        "lecture": 9,
        "id": 439,
        "question": "Software-defined networking in SAN provides several benefits like:",
        "answers": {
            "a": "Centralized control",
            "b": "Policy-based automation",
            "c": "Simplified, agile management",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "All these are benefits of SDN in SAN."
    },
    {
        "lecture": 9,
        "id": 440,
        "question": "The centralized control plane provides programming logic for transferring SAN traffic.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "The centralized control plane provides programming logic for SAN traffic."
    },
    {
        "lecture": 9,
        "id": 441,
        "question": "Hardware-based SAN management operations like zoning can be automated with policy-based automation.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Policy-based automation can automate zoning and other operations."
    },
    {
        "lecture": 9,
        "id": 442,
        "question": "SAN uses Fibre Channel protocol for communication.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "SAN uses Fibre Channel protocol for communication."
    },
    {
        "lecture": 9,
        "id": 443,
        "question": "Fibre Channel (FC) protocol is used to transport data and commands between the host and the storage systems.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC protocol transports data and commands between hosts and storage systems."
    },
    {
        "lecture": 9,
        "id": 444,
        "question": "Fibre Channel protocol is also used to transfer data between the storage systems.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC protocol transfers data between storage systems."
    },
    {
        "lecture": 9,
        "id": 445,
        "question": "FC is a high-speed network technology that runs on high-speed optical fiber cables and serial copper cables.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC runs on high-speed optical fiber and serial copper cables."
    },
    {
        "lecture": 9,
        "id": 446,
        "question": "Ultra-SCSI is commonly used in DAS environments.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Ultra-SCSI is used in DAS environments."
    },
    {
        "lecture": 9,
        "id": 447,
        "question": "The FC architecture is highly scalable.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC architecture is highly scalable."
    },
    {
        "lecture": 9,
        "id": 448,
        "question": "The latest DAS implementations of 16GFC offer a throughput of 3200 MB/s.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "16GFC in SAN, not DAS, offers a throughput of 3200 MB/s."
    },
    {
        "lecture": 9,
        "id": 449,
        "question": "FC SAN components include:",
        "answers": {
            "a": "Network adapters",
            "b": "Cables",
            "c": "Interconnecting devices",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "FC SAN components include network adapters, cables, and interconnecting devices."
    },

    {
        "lecture": 9,
        "id": 450,
        "question": "Network adapters in an FC SAN include:",
        "answers": {
            "a": "Compute systems",
            "b": "Hosts",
            "c": "Both"
        },
        "correct": "c",
        "reason": "Network adapters in an FC SAN include compute systems and hosts."
    },
    {
        "lecture": 9,
        "id": 451,
        "question": "In an FC SAN, storage systems are referred to as nodes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Storage systems in FC SAN are referred to as nodes."
    },
    {
        "lecture": 9,
        "id": 452,
        "question": "Each node in an FC SAN requires one or more network adapters to provide a physical interface for communicating with other nodes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Each node requires network adapters for communication."
    },
    {
        "lecture": 9,
        "id": 453,
        "question": "FC SAN implementations primarily use optical fiber cabling.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC SANs mainly use optical fiber cabling."
    },
    {
        "lecture": 9,
        "id": 454,
        "question": "Copper cables carry data in the form of light.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Optical fiber cables, not copper cables, carry data as light."
    },
    {
        "lecture": 9,
        "id": 455,
        "question": "Optical fiber cables are used for long-distance communication.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Optical fiber cables are suitable for long-distance communication."
    },
    {
        "lecture": 9,
        "id": 456,
        "question": "There are two types of optical fiber cables: single-mode and multimode.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Optical fiber cables can be single-mode or multimode."
    },
    {
        "lecture": 9,
        "id": 457,
        "question": "The commonly used interconnecting devices in FC SANs are FC switches and FC directors.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC switches and FC directors are common interconnecting devices in FC SANs."
    },
    {
        "lecture": 9,
        "id": 458,
        "question": "FC hubs physically connect nodes in a logical loop.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC hubs connect nodes in a logical loop."
    },
    {
        "lecture": 9,
        "id": 459,
        "question": "All the nodes must share the loop because data travels through all the connection points.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Nodes in FC hubs share the loop, causing data to travel through all points."
    },
    {
        "lecture": 9,
        "id": 460,
        "question": "FC switches are more intelligent than FC hubs.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC switches are more intelligent as they route data directly between ports."
    },
    {
        "lecture": 9,
        "id": 461,
        "question": "Each node in an FC switch has a dedicated communication path.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Nodes in FC switches have dedicated communication paths."
    },
    {
        "lecture": 9,
        "id": 462,
        "question": "The number of active ports in FC switches can be scaled up non-disruptively.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Active ports in FC switches can be increased without disruption."
    },
    {
        "lecture": 9,
        "id": 463,
        "question": "In FC switches, components can be replaced while a device is powered on and remains in operation.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC switches allow hot-swappable components."
    },
    {
        "lecture": 9,
        "id": 464,
        "question": "FC directors are high-end switches with a higher port count.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC directors have a higher port count and modular architecture."
    },
    {
        "lecture": 9,
        "id": 465,
        "question": "The FC architecture supports three basic interconnectivity options: point-to-point, FC-AL, and FC-SW.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC supports point-to-point, FC-AL, and FC-SW interconnectivity options."
    },
    {
        "lecture": 9,
        "id": 466,
        "question": "In a point-to-point configuration, two nodes are connected directly to each other.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Point-to-point configuration connects two nodes directly."
    },
    {
        "lecture": 9,
        "id": 467,
        "question": "A point-to-point configuration offers limited connectivity and scalability and is used in a DAS environment.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Point-to-point offers limited connectivity and is used in DAS."
    },
    {
        "lecture": 9,
        "id": 468,
        "question": "In FC-AL, the devices are attached to a shared loop.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC-AL devices are attached to a shared loop."
    },
    {
        "lecture": 9,
        "id": 469,
        "question": "In FC-AL, at any given time, only one device can perform I/O operations on the loop.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Only one device can perform I/O operations at a time in FC-AL."
    },
    {
        "lecture": 9,
        "id": 470,
        "question": "FC-AL can be implemented without any interconnecting devices.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC-AL can be implemented by directly connecting devices in a loop."
    },
    {
        "lecture": 9,
        "id": 471,
        "question": "In FC-SW, nodes do not share a loop; instead, data is transferred through a dedicated path between the nodes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "FC-SW transfers data through dedicated paths, not shared loops."
    },
    {
        "lecture": 9,
        "id": 472,
        "question": "An end point in the fabric is known as an N_Port.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "N_Port is an end point in the fabric."
    },
    {
        "lecture": 9,
        "id": 473,
        "question": "N_Port is also known as the node port.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "N_Port is referred to as the node port."
    },
    {
        "lecture": 9,
        "id": 474,
        "question": "E_Port forms the connection between two FC switches.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "E_Port connects two FC switches."
    },
    {
        "lecture": 9,
        "id": 475,
        "question": "E_Port is also known as the expansion port.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "E_Port is referred to as the expansion port."
    },
    {
        "lecture": 9,
        "id": 476,
        "question": "F_Port is a port on a switch that connects an N_Port.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "F_Port connects an N_Port on a switch."
    },
    {
        "lecture": 9,
        "id": 477,
        "question": "F_Port is also known as a fabric port.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "F_Port is referred to as a fabric port."
    },
    {
        "lecture": 9,
        "id": 478,
        "question": "G_Port is a generic port on a switch that can operate as an E_Port or an F_Port and determines its functionality automatically during initialization.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "G_Port can function as an E_Port or F_Port and determines its role automatically."
    },
    {
        
        "lecture": 12,
        "id": 479,
        "question": "What is the primary goal of business continuity (BC)?",
        "answers": {
            "a": "To improve productivity",
            "b": "To ensure information availability during and after a disaster",
            "c": "To reduce costs"
        },
        "correct": "b",
        "reason": "BC ensures that essential functions can continue during and after a disaster."
    },
    {
        "lecture": 12,
        "id": 480,
        "question": "What does BC involve?",
        "answers": {
            "a": "Only proactive measures",
            "b": "Both proactive and reactive measures",
            "c": "Only reactive measures"
        },
        "correct": "b",
        "reason": "BC involves proactive measures like risk assessment and reactive measures like disaster recovery."
    },
    {
        "lecture": 12,
        "id": 481,
        "question": "Why is continuous access to information critical for businesses?",
        "answers": {
            "a": "To meet service level agreements (SLAs)",
            "b": "To reduce costs",
            "c": "To increase employee satisfaction"
        },
        "correct": "a",
        "reason": "Continuous access ensures compliance with SLAs and uninterrupted services."
    },
    {
        "lecture": 12,
        "id": 482,
        "question": "Which of the following is NOT a component of information availability (IA)?",
        "answers": {
            "a": "Accessibility",
            "b": "Reliability",
            "c": "Flexibility"
        },
        "correct": "c",
        "reason": "IA components are accessibility, reliability, and timeliness."
    },
    {
        "lecture": 12,
        "id": 483,
        "question": "What does Mean Time Between Failure (MTBF) indicate?",
        "answers": {
            "a": "Average time required to repair a failed component",
            "b": "Average time a system operates before failing",
            "c": "Time taken to detect a fault"
        },
        "correct": "b",
        "reason": "MTBF measures the average time a system operates before experiencing a failure."
    },
    {
        "lecture": 12,
        "id": 484,
        "question": "What is the significance of Recovery Point Objective (RPO) in BC?",
        "answers": {
            "a": "Defines the amount of downtime a business can endure",
            "b": "Defines the amount of data loss a business can endure",
            "c": "Measures the time to detect a fault"
        },
        "correct": "b",
        "reason": "RPO determines the maximum tolerable amount of data loss."
    },
    {
        "lecture": 12,
        "id": 485,
        "question": "What does Recovery Time Objective (RTO) specify?",
        "answers": {
            "a": "The point-in-time to which systems must be recovered",
            "b": "The time within which systems must be recovered",
            "c": "The amount of data loss acceptable"
        },
        "correct": "b",
        "reason": "RTO specifies the maximum acceptable downtime before services must be restored."
    },
    {
        "lecture": 12,
        "id": 486,
        "question": "Which of the following is a proactive measure in BC?",
        "answers": {
            "a": "Business impact analysis",
            "b": "Disaster recovery",
            "c": "Manual reboot"
        },
        "correct": "a",
        "reason": "Proactive measures include business impact analysis to prepare for potential disruptions."
    },
    {
        "lecture": 12,
        "id": 487,
        "question": "What is the role of a disaster recovery plan (DRP)?",
        "answers": {
            "a": "To define the RPO and RTO",
            "b": "To restore IT infrastructure after a disaster",
            "c": "To prevent disasters"
        },
        "correct": "b",
        "reason": "DRP outlines procedures to restore IT services after a disaster."
    },
    {
        "lecture": 12,
        "id": 488,
        "question": "Why is it important to update DR plans regularly?",
        "answers": {
            "a": "To reduce costs",
            "b": "To incorporate new changes in the organization",
            "c": "To improve employee morale"
        },
        "correct": "b",
        "reason": "DR plans must be updated to reflect new people, offices, hardware, and software."
    },
    {
        "lecture": 12,
        "id": 489,
        "question": "Which term refers to the ability of an IT infrastructure to function during its specified time of operation?",
        "answers": {
            "a": "Business continuity",
            "b": "Information availability",
            "c": "Disaster recovery"
        },
        "correct": "b",
        "reason": "Information availability (IA) ensures the IT infrastructure functions as needed."
    },
    {
        "lecture": 12,
        "id": 490,
        "question": "What is meant by 'accessibility' in the context of IA?",
        "answers": {
            "a": "Information is accessible to the right user when required",
            "b": "Information is reliable and correct",
            "c": "Information is available at all times"
        },
        "correct": "a",
        "reason": "Accessibility ensures the right user can access information when needed."
    },
    {
        "lecture": 12,
        "id": 491,
        "question": "What is the consequence of an IT service outage?",
        "answers": {
            "a": "Increased productivity",
            "b": "Loss of revenue and reputation",
            "c": "Reduced costs"
        },
        "correct": "b",
        "reason": "IT service outages lead to loss of revenue, productivity, and reputation."
    },
    {
        "lecture": 12,
        "id": 492,
        "question": "Which activity is part of the 'Analyzing' stage in the BC planning lifecycle?",
        "answers": {
            "a": "Implementing risk management",
            "b": "Performing business impact analysis",
            "c": "Training employees"
        },
        "correct": "b",
        "reason": "The 'Analyzing' stage involves performing a business impact analysis."
    },
    {
        "lecture": 12,
        "id": 493,
        "question": "What does 'mean time to repair' (MTTR) include?",
        "answers": {
            "a": "Time to detect and fix a fault",
            "b": "Time to repair and test a system",
            "c": "Both a and b"
        },
        "correct": "c",
        "reason": "MTTR includes the time to detect, repair, test, and restore a system."
    },
    {
        "lecture": 12,
        "id": 494,
        "question": "What is the purpose of deploying redundancy in a data center?",
        "answers": {
            "a": "To improve employee satisfaction",
            "b": "To avoid single points of failure",
            "c": "To reduce costs"
        },
        "correct": "b",
        "reason": "Redundancy helps avoid single points of failure in a data center."
    },
    {
        "lecture": 12,
        "id": 495,
        "question": "What does the 'Implementing' stage in the BC planning lifecycle involve?",
        "answers": {
            "a": "Establishing objectives",
            "b": "Implementing risk management procedures",
            "c": "Conducting business impact analysis"
        },
        "correct": "b",
        "reason": "The 'Implementing' stage involves putting risk management procedures in place."
    },
    {
        "lecture": 12,
        "id": 496,
        "question": "What is the role of a business impact analysis (BIA)?",
        "answers": {
            "a": "To identify essential business units and processes",
            "b": "To implement backup solutions",
            "c": "To improve employee training"
        },
        "correct": "a",
        "reason": "BIA identifies essential business units and processes for continuity planning."
    },
    {
        "lecture": 12,
        "id": 497,
        "question": "Why is it important for BC plans to support third platform applications?",
        "answers": {
            "a": "To reduce hardware costs",
            "b": "To meet higher performance, scalability, and availability requirements",
            "c": "To simplify employee training"
        },
        "correct": "b",
        "reason": "Third platform applications require higher performance, scalability, and availability."
    },
    {
        "lecture": 12,
        "id": 498,
        "question": "What is the significance of the 'Training' stage in the BC planning lifecycle?",
        "answers": {
            "a": "To train employees on risk management procedures",
            "b": "To implement redundancy",
            "c": "To establish objectives"
        },
        "correct": "a",
        "reason": "The 'Training' stage involves educating employees on risk management procedures."
    },
    {
        "lecture": 12,
        "id": 499,
        "question": "Which term refers to the ability to quickly reestablish impacted services?",
        "answers": {
            "a": "Mean time to repair (MTTR)",
            "b": "Recovery time objective (RTO)",
            "c": "Disaster recovery (DR)"
        },
        "correct": "c",
        "reason": "Disaster recovery aims to quickly reestablish impacted services."
    },
    {
        "lecture": 12,
        "id": 500,
        "question": "What is the role of automated application failover in BC?",
        "answers": {
            "a": "To reduce manual intervention during outages",
            "b": "To improve data quality",
            "c": "To lower costs"
        },
        "correct": "a",
        "reason": "Automated application failover reduces the need for manual intervention."
    },
    {
        "lecture": 12,
        "id": 501,
        "question": "Which stage in the BC planning lifecycle includes developing contingency solutions?",
        "answers": {
            "a": "Designing and Developing",
            "b": "Analyzing",
            "c": "Implementing"
        },
        "correct": "a",
        "reason": "The 'Designing and Developing' stage includes creating contingency solutions."
    },
    {
        "lecture": 12,
        "id": 502,
        "question": "Why is business continuity important for compliance?",
        "answers": {
            "a": "To meet legal and regulatory requirements",
            "b": "To increase employee satisfaction",
            "c": "To reduce operational costs"
        },
        "correct": "a",
        "reason": "BC ensures adherence to legal and regulatory requirements."
    },
    {
        "lecture": 12,
        "id": 503,
        "question": "What is the focus of the 'Establishing Objectives' stage in the BC planning lifecycle?",
        "answers": {
            "a": "Defining team structure",
            "b": "Determining BC requirements and policies",
            "c": "Implementing redundancy"
        },
        "correct": "b",
        "reason": "The 'Establishing Objectives' stage involves determining BC requirements and policies."
    },
    {
        "lecture": 12,
        "id": 504,
        "question": "What is an essential aspect of a resilient IT infrastructure?",
        "answers": {
            "a": "Flexibility",
            "b": "High availability",
            "c": "Low cost"
        },
        "correct": "b",
        "reason": "High availability is crucial for a resilient IT infrastructure."
    },
    {
        "lecture": 12,
        "id": 505,
        "question": "What is the impact of not having a BC plan?",
        "answers": {
            "a": "Increased operational costs",
            "b": "Loss of productivity and revenue",
            "c": "Improved employee satisfaction"
        },
        "correct": "b",
        "reason": "Lack of a BC plan can lead to loss of productivity and revenue."
    },
    {
        "lecture": 12,
        "id": 506,
        "question": "Which process involves restoring IT services after a disaster?",
        "answers": {
            "a": "Risk assessment",
            "b": "Disaster recovery",
            "c": "Business impact analysis"
        },
        "correct": "b",
        "reason": "Disaster recovery focuses on restoring IT services post-disaster."
    },
    {
        "lecture": 12,
        "id": 507,
        "question": "Why is it crucial to test BC plans regularly?",
        "answers": {
            "a": "To increase employee satisfaction",
            "b": "To ensure effectiveness and identify gaps",
            "c": "To reduce costs"
        },
        "correct": "b",
        "reason": "Regular testing ensures BC plans are effective and identifies any gaps."
    },
    {
        "lecture": 12,
        "id": 508,
        "question": "What is the role of risk management in BC?",
        "answers": {
            "a": "To avoid all potential risks",
            "b": "To minimize the impact of risks",
            "c": "To increase profits"
        },
        "correct": "b",
        "reason": "Risk management aims to minimize the impact of potential risks."
    },
    
    {
        "lecture": 12,
        "id": 509,
        "question": "…is a set of processes that includes all activities that a business must perform to mitigate the impact of planned and unplanned downtime.",
        "answers": {
            "a": "BC",
            "b": "FC",
            "c": "MBC"
        },
        "correct": "a",
        "reason": "BC stands for Business Continuity, which includes all necessary activities."
    },
    {
        "lecture": 12,
        "id": 510,
        "question": "…entails preparing for, responding to, and recovering from a system outage that adversely affects business operations.",
        "answers": {
            "a": "FC",
            "b": "BC",
            "c": "MBC"
        },
        "correct": "b",
        "reason": "BC involves preparing for and managing system outages."
    },
    {
        "lecture": 12,
        "id": 511,
        "question": "Business continuity prevents interruption of mission-critical services.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "BC aims to ensure mission-critical services continue uninterrupted."
    },
    {
        "lecture": 12,
        "id": 512,
        "question": "BC does not involve proactive measures such as business impact analysis, risk assessment.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "BC includes proactive measures like business impact analysis and risk assessment."
    },
    {
        "lecture": 12,
        "id": 513,
        "question": "The goal of a BC solution is to ensure “information availability” required to conduct vital business operations.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "BC aims to ensure information availability for critical business operations."
    },
    {
        "lecture": 12,
        "id": 514,
        "question": "The failure to meet industry or government regulations may not result in hefty fines.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Failure to meet regulations can result in hefty fines."
    },
    {
        "lecture": 12,
        "id": 515,
        "question": "Loss of business-critical data could compound the financial impact significantly.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Losing business-critical data can greatly increase financial impact."
    },
    {
        "lecture": 12,
        "id": 516,
        "question": "There are many threats to business continuity, such as...",
        "answers": {
            "a": "Natural disasters",
            "b": "Unplanned occurrences",
            "c": "Planned occurrences that could result in the inaccessibility of information",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "Threats include natural disasters, unplanned occurrences, and planned occurrences."
    },
    {
        "lecture": 12,
        "id": 517,
        "question": "Business continuity is an important process to define and implement these strategies.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "BC is crucial for defining and implementing strategies to ensure continuity."
    },
    {
        "lecture": 12,
        "id": 518,
        "question": "…refers to the ability of an IT infrastructure to function according to business requirements and customer expectations during its specified time of operation.",
        "answers": {
            "a": "Information availability",
            "b": "Scalability",
            "c": "Integrity"
        },
        "correct": "a",
        "reason": "Information availability ensures IT functions meet business and customer needs."
    },
    {
        "lecture": 12,
        "id": 519,
        "question": "IA ensures that people (employees, customers, suppliers, and partners) can access information whenever they need it.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "IA ensures information is accessible to all necessary parties."
    },
    {
        "lecture": 12,
        "id": 520,
        "question": "IA can be defined in terms of...",
        "answers": {
            "a": "Accessibility",
            "b": "Reliability",
            "c": "Timeliness of information",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "IA is defined by accessibility, reliability, and timeliness."
    },
    {
        "lecture": 12,
        "id": 521,
        "question": "Accessibility: Information should be accessible to the right user when required.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Accessibility ensures information is available to the right user at the right time."
    },
    {
        "lecture": 12,
        "id": 522,
        "question": "Reliability: Information should not be reliable and correct in all aspects.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "Information must be reliable and correct."
    },
    {
        "lecture": 12,
        "id": 523,
        "question": "Timeliness: Defines the time window (a particular time of the day, week, month).",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Timeliness specifies when information must be available."
    },
    {
        "lecture": 12,
        "id": 524,
        "question": "Information unavailability comes from...",
        "answers": {
            "a": "Poor application design",
            "b": "Resource configuration errors",
            "c": "Disasters such as flood, fire",
            "d": "All of the above"
        },
        "correct": "d",
        "reason": "Unavailability can result from poor design, errors, and disasters."
    },
    {
        "lecture": 12,
        "id": 525,
        "question": "If the database server is down for some reason, then the data is accessible to the consumers, which leads to IT service outage.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "If the server is down, data is inaccessible, causing an outage."
    },
    {
        "lecture": 12,
        "id": 526,
        "question": "Due to information unavailability, results in loss of productivity, loss of revenue, poor financial performance, and damages to reputation.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "Unavailability leads to productivity, revenue loss, and reputational damage."
    },
    {
        "lecture": 12,
        "id": 527,
        "question": "Information availability doesn’t rely on the availability of both physical and virtual components of a data center.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "IA depends on both physical and virtual components."
    },
    {
        "lecture": 12,
        "id": 528,
        "question": "A ….is the termination of a component’s ability to perform a required function.",
        "answers": {
            "a": "Failure",
            "b": "Availability",
            "c": "Both"
        },
        "correct": "a",
        "reason": "Failure is the termination of a component's required function."
    },
    {
        "lecture": 12,
        "id": 529,
        "question": "…is the average time available for a system or component to perform its normal operations between failures.",
        "answers": {
            "a": "MTBF",
            "b": "MTTR"
        },
        "correct": "a",
        "reason": "MTBF measures the average operational time before failure."
    },
    {
        "lecture": 12,
        "id": 530,
        "question": "It is the average time required to repair a failed component.",
        "answers": {
            "a": "MTBF",
            "b": "MTTR"
        },
        "correct": "b",
        "reason": "MTTR is the average time to repair a failed component."
    },
    {
        "lecture": 12,
        "id": 531,
        "question": "MTTR includes the total time required to do the following activities: detect the fault, mobilize the maintenance team, diagnose the fault.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "MTTR covers all steps to repair a failure."
    },
    {
        "lecture": 12,
        "id": 532,
        "question": "IA could also be expressed as...",
        "answers": {
            "a": "IA = MTBF/(MTBF + MTTR)",
            "b": "IA = MTBF/(MTBF * MTTR)",
            "c": "IA = MTBF/(MTBF / MTTR)"
        },
        "correct": "a",
        "reason": "IA can be calculated as MTBF divided by (MTBF + MTTR)."
    },
    {
        "lecture": 12,
        "id": 533,
        "question": "IA can be expressed in terms of system uptime and downtime and measured as the amount or percentage of system uptime.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "reason": "IA is measured by system uptime and downtime."
    },
    {
        "lecture": 12,
        "id": 534,
        "question": "IA = system uptime/(system uptime * system downtime).",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "reason": "IA is calculated as system uptime divided by (system uptime + system downtime)."
    }

    
];



const lectureSummaries = {
    1: `In our digital world, immense amounts of data are constantly generated, collected, stored, and analyzed. This data, according to a 2014 study by IDC, amounts to approximately 4.4 trillion gigabytes annually and is expected to reach 44 trillion gigabytes by 2020. This explosion of data comes from various sources, including individuals online, businesses, and smart devices connected to the Internet.

    The Digital Universe
    Individuals and organizations generate data through activities like web searches, emails, and social media interactions. The rise of Internet of Things (IoT) devices—like smartwatches, sensors, and home appliances—has further contributed to this growth. These devices exchange data over the Internet, allowing for applications in weather monitoring, healthcare, and infrastructure management.
    
    Data in Business Operations
    Businesses rely heavily on data for their operations. Fast, reliable, and secure access to information is critical for various sectors, including banking, government, online retail, and healthcare. Organizations must store, protect, and manage this data efficiently to meet legal, regulatory, and business requirements.
    
    Types of Digital Data
    Digital data can be classified as structured, semi-structured, quasi-structured, or unstructured. Structured data is organized and easy to analyze, like data in a relational database. Semi-structured data has some organizational structure, such as XML files. Quasi-structured data has irregular formats, like clickstreams that show user activity on websites. Unstructured data includes emails, text documents, and videos, making up over 90% of today’s digital universe.
    
    Data vs. Information
    Data is a collection of raw facts, while information is processed data that provides context and meaning. For example, sales figures are data, but a sales report that analyzes these figures to show trends and insights is information. This transformation of data into information is crucial for decision-making and business intelligence.
    
    Storage Devices
    Storage devices are essential for keeping information. They can be internal, removable, or external, and are categorized into magnetic storage (like hard drives), optical storage (like DVDs), and flash-based storage (like SSDs). In enterprise environments, information is stored on storage systems or arrays designed for high capacity, scalability, and reliability.
    
    Data Centers
    A data center is a facility that houses IT infrastructure, including compute systems, storage systems, and network equipment. Key components of a data center include:
    
    Facility: The physical building and floor space.
    IT Equipment: Compute systems, storage systems, and network equipment.
    Support Infrastructure: Power equipment, environmental controls, and security systems.
    Data centers must ensure availability, security, capacity, scalability, performance, data integrity, and manageability to support business operations.
    
    Data Center Management Processes
    Efficient data center management involves:
    
    Monitoring: Continuously gathering information on resources.
    Reporting: Collating and presenting monitored data.
    Provisioning: Configuring and allocating resources.
    Planning: Estimating resource requirements.
    Maintenance: Ensuring proper functioning of resources and resolving issues.
    Evolution of Computing Platforms
    Computing platforms have evolved significantly:
    
    First Platform: Mainframes and terminals.
    Second Platform: Personal computers, client-server model, and web applications.
    Third Platform: Cloud, Big Data, mobile, and social technologies.
    The third platform is transforming businesses by enabling new models and services. An intermediate platform, called Platform 2,5, helps organizations transition from second to third platform technologies.
    
    Key Terms for Multiple Choice Questions
    Digital Universe: The vast amount of digital data generated globally.
    IoT (Internet of Things): Devices exchanging data over the Internet.
    Structured Data: Organized data, easy to analyze.
    Unstructured Data: Data without a fixed format, such as emails and videos.
    Data Center: A facility housing IT infrastructure.
    Storage Systems: Hardware components for storing data.
    Mainframe: A powerful compute system for centralizing applications.
    Client-Server Model: A distributed application architecture with clients and servers.
    Third Platform: Cloud, Big Data, mobile, and social technologies.
    Platform 2,5: Technologies bridging second and third platforms.`,
    2: `In today's digital age, four key technologies make up what is known as the third platform: cloud computing, Big Data, social networking, and mobile computing. These technologies are transforming how businesses operate and innovate.

    Cloud Computing
    Cloud computing is defined by the National Institute of Standards and Technology (NIST) as a model that allows convenient, on-demand network access to a shared pool of configurable computing resources. This means you can use and access resources like networks, servers, storage, and applications over the internet without owning them. Think of it like using utilities such as electricity or water – you pay for what you use without worrying about the infrastructure.
    
    There are five essential characteristics of cloud computing:
    
    On-demand self-service: Users can provision resources like server time or storage automatically without human intervention.
    Broad network access: Services are accessible over the network via various devices like mobile phones, tablets, and laptops.
    Resource pooling: Resources are pooled to serve multiple consumers using a multi-tenant model, with resources dynamically assigned based on demand.
    Rapid elasticity: Resources can be quickly scaled up or down to meet demand.
    Measured service: Resource usage is monitored, controlled, and reported, providing transparency for both the provider and consumer.
    Cloud services are offered in three primary models:
    
    Infrastructure as a Service (IaaS): Provides virtualized computing resources over the internet.
    Platform as a Service (PaaS): Provides a platform allowing customers to develop, run, and manage applications without dealing with the infrastructure.
    Software as a Service (SaaS): Delivers software applications over the internet, on-demand, and typically on a subscription basis.
    Cloud Deployment Models
    There are four main cloud deployment models:
    
    Public cloud: Available to the general public, owned by a cloud service provider.
    Private cloud: Exclusive to a single organization, offering greater control and privacy.
    Community cloud: Shared among several organizations with common concerns.
    Hybrid cloud: A mix of two or more cloud models, allowing data and applications to move between private and public clouds for greater flexibility.
    Big Data Analytics
    Big Data refers to large, complex data sets that require advanced methods to analyze and gain insights. Big Data has three key characteristics, known as the "3Vs":
    
    Volume: Massive amounts of data.
    Velocity: The speed at which data is generated and processed.
    Variety: Different types of data from various sources.
    Additional characteristics include:
    
    Variability: The data’s meaning and format can change.
    Veracity: The quality and accuracy of the data.
    Value: The potential benefits derived from analyzing the data.
    Big Data analytics involves processing this data to extract valuable insights. It typically uses technologies like distributed storage systems (e.g., Hadoop), MapReduce for processing, and NoSQL databases for managing diverse data types.
    
    Social Networking
    Social networking involves creating and maintaining connections among individuals or organizations. Platforms like Facebook, Twitter, LinkedIn, and Instagram enable users to share information and interact globally. Social network analysis (SNA) examines patterns of relationships and interactions within these networks, providing insights into social structures, information flow, and influential individuals.
    
    Social networking has various applications:
    
    Brand networking: Companies use social networks to engage with consumers, promote products, and gather customer feedback.
    Enterprise collaboration: Enhances communication and information sharing within organizations.
    Marketing: Targets potential customers and increases sales through social media advertising.
    Customer support: Provides quick and efficient customer service by monitoring and responding to social media comments.
    Mobile Computing
    Mobile computing refers to using portable devices like smartphones and tablets to access information and applications on the go. This has been facilitated by advances in wireless technologies, leading to pervasive computing, where devices are continuously connected to the internet.
    
    Applications of mobile computing include:
    
    Enterprise mobility: Enables employees to access business information and applications from anywhere, increasing productivity.
    Mobility-based products and services: Offers customers mobile banking, e-commerce, and location-based services.
    Mobile cloud computing: Allows mobile devices to access cloud services, providing flexibility and reducing costs for businesses.
    Key Characteristics of Third Platform Infrastructure
    The third platform infrastructure has several key characteristics to support modern applications and services:
    
    Availability: Ensures continuous access to applications and data.
    Security: Protects data from unauthorized access and breaches.
    Scalability: Can handle increasing workloads and data volumes.
    Performance: Delivers high-speed data processing and low latency.
    Ease of access: Allows access to applications and data from any location.
    Interoperability: Integrates various technologies and components seamlessly.
    Manageability: Simplifies infrastructure management through automation and unified tools.
    Transformation to the Third Platform
    Organizations are transforming to the third platform to stay competitive and innovate. Key drivers include:
    
    New business models: Creating and enhancing business models to provide more value to customers.
    Agility and innovation: Enabling faster development and deployment of products and services.
    Intelligent operations: Using data analytics to improve efficiency and decision-making.
    New products and services: Leveraging technology to offer innovative solutions and create new revenue streams.
    Mobility: Providing ubiquitous access to information and applications.
    Social networking: Engaging customers through social media to enhance visibility and customer service.
    Organizations need to transform their operating models, technology, and skills to fully leverage third platform technologies and achieve business agility and efficiency.
    
    Key Terms for Multiple Choice Questions
    Cloud Computing: A model for enabling network access to a shared pool of configurable computing resources.
    IaaS, PaaS, SaaS: Cloud service models offering infrastructure, platform, and software services.
    Public, Private, Community, Hybrid Cloud: Cloud deployment models.
    Big Data: Large data sets requiring advanced analytics.
    3Vs of Big Data: Volume, Velocity, Variety.
    Social Networking: Building connections among individuals or organizations.
    Mobile Computing: Accessing applications and information on mobile devices.
    Third Platform: Cloud, Big Data, social networking, and mobile computing technologies.`,
    3: `Introduction:

    Focuses on the building blocks of a data center, compute systems, and their components/types.
    Covers compute virtualization, application virtualization, desktop virtualization.
    Provides an overview of storage and connectivity in a data center.
    Concludes with an overview of software-defined data centers.
    Data Center Infrastructure:
    
    Composed of five layers: physical infrastructure, virtual infrastructure, software-defined infrastructure, orchestration, and services.
    Three cross-layer functions: business continuity, security, and management.
    Building blocks create platforms (second, Platform 2,5, or third platform data center).
    Physical Infrastructure:
    
    Includes compute systems, storage systems, networking devices, operating systems, protocols, and tools.
    Executes requests from virtual and software-defined infrastructure.
    Detailed coverage in subsequent modules on storage (Modules 4-7) and networking (Modules 9-11).
    Virtualization:
    
    Abstracts physical resources to create virtual resources using virtualization software.
    Aggregates physical resources into pools, enabling dynamic creation and reclamation of virtual resources.
    Supports consolidation of physical IT resources, increasing ROI and reducing costs.
    Key to resource pooling and elasticity in cloud computing.
    Software-Defined Infrastructure:
    
    Deployed on the virtual or physical layer, virtualizes and pools all infrastructure components.
    Key components: software-defined compute, storage (SDS), and network (SDN).
    Enables IT as a Service (ITaaS), automates management, and centralizes heterogeneous resource delivery.
    Orchestration Layer:
    
    Provides workflows for automated tasks to accomplish business operations.
    Interacts with software-defined layers and cross-layer functions to provision services.
    Service Layer:
    
    Delivers IT resources as services to end users and applications.
    Includes a service catalog detailing available services, costs, SLAs, and security mechanisms.
    Cross-Layer Functions:
    
    Business Continuity (BC):
    Proactive and reactive measures for mitigating downtime.
    Includes backup, archiving, replication, disaster recovery, and restart.
    Security:
    Administrative and technical mechanisms for secure data center operations.
    Includes GRC processes to ensure ethical and compliant operations.
    Management:
    Involves operations management activities to align IT services with business objectives.
    Focuses on storage infrastructure management and related tasks.
    Infrastructure Building Options:
    
    Best-of-Breed:
    Integrates high-quality components from multiple vendors.
    Offers flexibility but requires significant CAPEX, OPEX, and time for deployment and scaling.
    Converged Infrastructure:
    Integrated, pre-configured solutions from a single vendor.
    Simplifies deployment, reduces space/power needs, but may lack flexibility for multi-vendor components.
    Compute Systems:
    
    Physical Components: Processor, RAM, ROM, motherboard, chipset, secondary storage.
    Logical Components: OS, virtual memory, logical volume manager (LVM), file system.
    Types: Tower, rack-mounted, and blade compute systems.
    Compute Virtualization:
    
    Abstracts physical hardware to create VMs running on hypervisors (bare-metal or hosted).
    Overcomes physical resource conflicts, improves utilization, reduces costs, and simplifies management.
    Key components: VM, hypervisor kernel, and VMM.
    Application Virtualization:
    
    Decouples applications from underlying OS/hardware.
    Techniques: encapsulation, presentation, and streaming.
    Benefits: simplified management, OS integrity, conflict resolution, flexible access.
    Desktop Virtualization:
    
    Decouples OS, applications, and user profiles from physical devices.
    Techniques: Remote Desktop Services (RDS) and Virtual Desktop Infrastructure (VDI).
    Benefits: simplified management, improved data protection, flexible access.
    Storage and Connectivity:
    
    Evolved from server-centric to information-centric architecture.
    Storage devices: magnetic disks, SSDs, tapes, optical discs.
    Connectivity: Compute-to-compute (IP-based), compute-to-storage (protocols like IDE/ATA, SCSI, FC, IP).
    Network virtualization abstracts physical network resources.
    Software-Defined Data Center (SDDC):
    
    Extends virtualization to all data center resources.
    Components: software-defined compute, SDN, SDS.
    Benefits: agility, cost efficiency, improved control, centralized management, flexibility.
    Concepts in Practice:
    
    VCE Vblock: Integrated IT infrastructure solution from EMC, VMware, and Cisco.
    EMC VSPEX: Flexible virtualized infrastructure solution with multiple vendor options.
    VMware Products: ESXi (hypervisor), ThinApp (application virtualization), Horizon (VDI), NSX (network virtualization).
    Conclusion:
    
    Module covers the essentials of data center environments, including compute systems, virtualization, storage, connectivity, and SDDC.`,
    5: `This module dives into the essential components of block-based storage systems, their functionalities, and various storage provisioning methods. Here’s a summary of the key points in simple language:

    Components of Block-Based Storage Systems:
    
    Controllers:
    
    Controllers are crucial in a block-based storage system. They consist of three main parts: front end, cache, and back end.
    Front End: Interfaces between the storage system and compute systems. It has ports and controllers that process I/O requests.
    Cache: Temporary storage to speed up I/O operations. It reduces the time required to read or write data by storing frequently accessed data.
    Back End: Interfaces between cache and physical storage drives, handling data transfers and providing error correction and RAID functionality.
    Cache Management:
    
    Cache improves performance by isolating compute systems from the mechanical delays of hard disk drives (HDDs).
    Read Hits: When requested data is found in cache, it’s quickly sent to the compute system.
    Cache Miss: If data isn’t in cache, it’s read from storage, which takes longer.
    Write-Through Cache: Data is written to cache and immediately to storage.
    Write-Back Cache: Data is written to cache and later to storage, improving write response times.
    Cache Flushing: Moves data from cache to storage to manage space. Can be idle, high watermark, or forced flushing based on cache utilization.
    Cache Protection:
    
    Cache Mirroring: Data is stored in two different locations in cache to protect against cache failures.
    Cache Vaulting: During power failures, cache data is saved to dedicated storage drives (vault drives).
    Storage Provisioning Methods:
    
    Traditional Provisioning:
    
    Physical drives are grouped into RAID sets. Each set forms logical units (LUNs) assigned to compute systems.
    RAID Set: A group of drives with a specific RAID level determining performance and availability.
    LUNs: Logical partitions created from RAID sets, each assigned a unique ID.
    MetaLUN: Expands LUNs by combining multiple LUNs, either concatenated or striped for increased capacity or performance.
    Virtual Provisioning:
    
    LUNs (thin LUNs) created with more capacity than physically allocated, using a shared pool of storage.
    Shared Pool: Collection of physical drives from which thin LUNs are created. Can be expanded as needed.
    Benefits: Improves storage utilization, allows oversubscription, and reduces costs by avoiding over-provisioning.
    LUN Masking:
    
    Controls which compute systems can access specific LUNs, enhancing data security and integrity.
    Key Concepts and Terms for Multiple-Choice Questions:
    
    Controller Components: Front end, cache, back end.
    Cache Functions: Read hit, cache miss, write-through, write-back, cache flushing.
    RAID Set: Group of drives with a specific RAID level.
    Thin LUN: LUN created with more capacity than physically allocated.
    LUN Masking: Controls access to LUNs by compute systems.
    Cache Protection Techniques: Cache mirroring, cache vaulting.
    MetaLUN: Expansion method for LUNs.
    Storage Pool: Collection of physical drives for virtual provisioning.`,
    6: `Module 6: File-based Storage System (NAS)

    In this module, we explore the components and architectures of file-based storage systems, often known as Network Attached Storage (NAS). We also look into various file-sharing protocols and file-level virtualization and tiering.
    
    A NAS system is like a dedicated, high-performance file-sharing and storage device. It allows users to share files over an IP network, providing an efficient way to consolidate and manage storage. NAS uses protocols like TCP/IP for data transfer, and file-sharing protocols like CIFS (Common Internet File System) and NFS (Network File System). These protocols help both UNIX and Windows users to access the same data seamlessly.
    
    Components of NAS:
    A NAS system has two main components: the controller and the storage. The controller is a compute system with network, memory, and CPU resources, optimized for file serving. It handles tasks like configuring RAID sets, creating LUNs (Logical Unit Numbers), installing file systems, and managing file shares. The storage part can include different types of storage devices like SSDs, SAS, and SATA drives.
    
    NAS Architectures:
    There are two main types of NAS architectures: scale-up and scale-out.
    
    Scale-up NAS: This allows increasing capacity and performance by adding or upgrading NAS heads and storage. However, it has a fixed capacity limit, which can affect performance as it approaches this limit.
    
    Scale-out NAS: This architecture pools multiple NAS nodes together in a cluster, allowing the system to scale by adding more nodes. This provides better aggregate performance and availability. Scale-out NAS uses a distributed file system that stripes data across all nodes, ensuring that data is evenly distributed and easily accessible.
    
    File Sharing Protocols:
    
    CIFS: A client-server protocol enabling remote access to files over TCP/IP. It uses file and record locking to prevent conflicts and supports fault tolerance by restoring connections if they drop.
    
    NFS: Commonly used on UNIX systems, NFS allows remote access to files using a machine-independent model. It has several versions, with NFSv4 offering enhanced security and stateful protocol design.
    
    HDFS: Used in big data environments, HDFS spans multiple nodes in a cluster and supports operations using the MapReduce framework. It has a master-slave architecture, with a single NameNode managing file system namespace and multiple DataNodes handling read/write requests.
    
    NAS I/O Operations:
    NAS I/O operations involve converting client requests into physical storage requests. In a scale-up NAS system, the process involves:
    
    The client sending a TCP/IP I/O request.
    The NAS system converting it to a block-level I/O operation.
    The NAS system processing the request and sending the response back to the client.
    In a scale-out NAS system, I/O operations involve multiple nodes. A client connects to one node, but the data might be spread across several nodes. The node retrieves the necessary data from other nodes using the back-end network.
    
    This module also touches on file-level virtualization and tiering, ensuring efficient data management and optimized performance.
    
    Key Terms for Multiple Choice:
    
    NAS (Network Attached Storage)
    TCP/IP
    CIFS (Common Internet File System)
    NFS (Network File System)
    RAID (Redundant Array of Independent Disks)
    LUN (Logical Unit Number)
    Scale-up NAS
    Scale-out NAS
    HDFS (Hadoop Distributed File System)
    Controller
    SSD (Solid State Drive)
    SAS (Serial Attached SCSI)
    SATA (Serial ATA)`,
    9: `Module 9: Fibre Channel (FC) SAN

    This module focuses on the key requirements for SAN in the third platform, software-defined networking, FC SAN components, architecture, topologies, link aggregation, zoning, and virtualization in the FC SAN environment.
    
    1. Understanding SAN:
    
    A Storage Area Network (SAN) is a network that connects storage systems to compute systems and other storage systems. SAN allows multiple compute systems to access and share storage resources. It also supports long-distance data transfer, connecting geographically dispersed systems and enabling data replication and remote backups. SAN typically provides access to block-based storage systems.
    
    2. Benefits of SAN:
    
    Consolidation and Sharing: SAN improves the utilization of storage resources compared to Direct-Attached Storage (DAS). It enables centralized storage management, reducing complexity and cost.
    Long-Distance Connectivity: SAN can connect systems over wide locations, allowing data sharing and replication to protect against local disasters.
    3. Third Platform Requirements:
    
    The third platform includes social networking, mobile computing, cloud services, and big data analytics. These applications require high performance, scalability, and availability. SAN must meet these requirements with:
    
    Software-defined networking
    Fibre Channel (FC) SAN
    Internet Protocol (IP) SAN
    Fibre Channel over Ethernet (FCoE) SAN
    Virtualization in SAN
    4. Software-Defined Networking (SDN):
    
    SDN separates the control plane (logic) from the data plane (traffic transfer) in network components. The control functions are managed by external software called a network controller, providing centralized control, policy-based automation, and simplified management.
    
    5. FC SAN Components:
    
    Network Adapters: FC host bus adapters (HBAs) and storage system front-end adapters.
    Cables: Optical fiber (multimode for short distances and single-mode for long distances) and copper cables.
    Interconnecting Devices: FC hubs, FC switches, and FC directors.
    6. FC Architecture:
    
    Point-to-Point: Direct connection between two nodes. Limited scalability.
    Fibre Channel Arbitrated Loop (FC-AL): Devices share a loop; only one device can use the loop at a time. Used with FC hubs.
    Fibre Channel Switched Fabric (FC-SW): Uses switches or directors. Provides dedicated paths, high scalability, and minimal disruption when adding or removing nodes.
    7. FC Port Types:
    
    N_Port (Node Port): Endpoint in the fabric, usually on compute or storage systems.
    E_Port (Expansion Port): Connects two FC switches.
    F_Port (Fabric Port): Connects an N_Port to a switch.
    G_Port (Generic Port): Can operate as E_Port or F_Port.
    Key Terms and Expressions:
    
    SAN - Storage Area Network
    DAS - Direct-Attached Storage
    FC - Fibre Channel
    HBA - Host Bus Adapter
    SDN - Software-Defined Networking
    N_Port - Node Port
    E_Port - Expansion Port
    F_Port - Fabric Port
    G_Port - Generic Port
    Point-to-Point - Direct connection between two nodes
    FC-AL - Fibre Channel Arbitrated Loop
    FC-SW - Fibre Channel Switched Fabric
    Modal Dispersion - Signal weakening due to collision in multimode fiber
    This summary provides a clear overview of the module's content, including definitions, benefits, key components, and architectures of SAN, and FC port types. Understanding these concepts will help in answering multiple-choice questions related to this module.`,
    12: `Business Continuity (BC) is all about ensuring that an organization's operations can continue during and after a disaster. This module focuses on the key aspects of business continuity, including the causes and impact of information unavailability, the BC planning lifecycle, and the requirements for third platform environments.

Importance of Business Continuity:
BC involves preparing for, responding to, and recovering from system outages that affect business operations. It includes processes and procedures to ensure that essential functions can continue during and after a disaster. The goal is to prevent interruption of mission-critical services and quickly reestablish impacted services. This involves both proactive measures (like risk assessment and data protection) and reactive countermeasures (like disaster recovery).

Key Terms:

Information Availability (IA): Ensuring that information is accessible, reliable, and timely.
Mean Time Between Failure (MTBF): Average time a system operates before failing.
Mean Time To Repair (MTTR): Average time required to repair a failed component.
Recovery Point Objective (RPO): Point-in-time to which systems and data must be recovered after an outage.
Recovery Time Objective (RTO): Time within which systems and applications must be recovered after an outage.
Factors Affecting Information Availability:
Information unavailability can be caused by disasters (natural or man-made), poor application design, resource configuration errors, data corruption, and human errors. Planned activities like system maintenance and upgrades can also impact information availability.

Consequences of Information Unavailability:
Unavailability of information can lead to loss of productivity, revenue, and reputation. It can also result in compliance issues and hefty fines if regulations are not met.

BC Planning Lifecycle:

Establishing Objectives: Determine BC requirements, scope, budget, and policies.
Analyzing: Collect information, conduct business impact analysis, perform risk analysis, and evaluate options.
Designing and Developing: Define team structure, design data protection strategies, develop contingency solutions.
Implementing: Implement risk management procedures, prepare DR sites, and ensure redundancy.
Training, Testing, Assessing, and Maintaining: Train employees, test BC plans, assess performance, and update plans as needed.
Business Impact Analysis (BIA):
BIA identifies essential business units and processes, evaluates the impact of disruptions, and helps prioritize recovery efforts. It involves determining key business processes, estimating costs of failure, defining RTO, and establishing recovery strategies.

Third Platform Requirements:
The third platform, which includes cloud, big data, mobile, and social computing, demands higher performance, scalability, and availability. BC solutions must support these requirements by ensuring continuous service delivery according to SLAs.

Building a Resilient IT Infrastructure:
To achieve high availability, organizations should:

Deploy redundancy at component and site levels.
Implement data protection solutions like backup and replication.
Use automated application failover.
Design resilient applications.
In summary, effective business continuity planning involves understanding the causes and impacts of information unavailability, setting clear objectives, analyzing risks, designing robust solutions, implementing strategies, and continuously training and testing to ensure readiness. With a focus on third platform requirements, organizations can ensure they meet the high expectations for performance, scalability, and availability.`,

};

const formatSummary = (summary, isExpanded) => {
    console.log(summary);

    const sentences = summary.split(/(?<=[.;!?])/);
    if (!isExpanded) {
        console.log("dss")
        return sentences.slice(0, 2).map((sentence, index) => (
            <p key={index}>{sentence.trim()}</p>
        ));
    }
    return sentences.map((sentence, index) => (
        <p key={index}>{sentence.trim()}</p>
    ));
};


function Landing2() {


    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
    // Close popup after 6 seconds
    const timer = setTimeout(() => {
        setShowPopup(false);
    }, 6000);

    // Function to close popup when clicking anywhere
    const handleClick = () => {
        setShowPopup(false);
    };

    // Add event listener to close popup on click
    window.addEventListener('click', handleClick);

    // Cleanup function to clear timer and event listener
    return () => {
        clearTimeout(timer);
        window.removeEventListener('click', handleClick);
    };
    }, []);



    const [selectedLecture, setSelectedLecture] = useState(1);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isCorrect, setIsCorrect] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('selectedAnswers')) || {};
        const filtered = questionsData.filter(q => q.lecture === selectedLecture);
        setFilteredQuestions(filtered);
        setSelectedAnswers(savedAnswers);
        setIsCorrect(savedAnswers);
    }, [selectedLecture]);




    const handleLectureChange = (e) => {
        setSelectedLecture(parseInt(e.target.value));
    };

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prev => {
            const newAnswers = { ...prev, [questionId]: answer };
            localStorage.setItem('selectedAnswers', JSON.stringify(newAnswers));
            return newAnswers;
        });
        const question = filteredQuestions.find(q => q.id === questionId);
        if (question && answer === question.correct) {
            setIsCorrect(prev => ({ ...prev, [questionId]: true }));
        } else {
            setIsCorrect(prev => ({ ...prev, [questionId]: false }));
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setTimeout(() => {
                audioRef.current.pause();
            }, 1000);
        }
    };


 const resetAnswers = () => {
        setSelectedAnswers({});
        setIsCorrect({});
        localStorage.removeItem('selectedAnswers');
    };

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <>
        <div className='pop-up'>
            {showPopup && (
                <div className='popup-content'>
                <p> 

اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ </p>
                </div>
            )}
            
            </div>
            
            <div className='made-by'>
                Made By <a target='_blank' href="https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/"> Abdelrhman Elsawy </a>
            </div>


                    <audio className='hide' ref={audioRef} src={correctSound} /> {/* Add the audio element */}


            <section className='landing'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-l2'>
                            <h1> ICM </h1>
                        </div>
                        <div className='col-l2'>
                            <div className='options'>
                                <select id="ChooseLec" onChange={handleLectureChange} value={selectedLecture}>
                                    <option value='1'>Module 1</option>
                                    <option value='2'>Module 2</option>
                                    <option value='3'>Module 3</option>
                                    <option value='5'>Module 5</option>
                                    <option value='6'>Module 6</option>
                                    <option value='9'>Module 9</option>
                                    <option value='12'>Module 12</option>

                                </select>
                            </div>
                        </div>
                        <button className='reset-btn' onClick={resetAnswers}>Reset Answers</button>

                        <div className='col-12'>
                        <div className={`lecture-summary expand-${isExpanded}`}>
                                <h2 className={`lec-${selectedLecture}`}>
                                    {formatSummary(lectureSummaries[selectedLecture], isExpanded)}
                                </h2>
                                <button onClick={toggleExpanded}>
                                    {isExpanded ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            
                            <div className='question-content'>
                                {filteredQuestions.map(question => (
                                    <div key={question.id} className='question'>
                                        <h3>{question.question}</h3>
                                        <div className='answers'>
                                            {Object.entries(question.answers).map(([key, answer]) => (
                                                <div key={key} className={`input ${selectedAnswers[question.id] === key && isCorrect[question.id] ? 'correct' : ''} ${selectedAnswers[question.id] === key && isCorrect[question.id] === false ? 'wrong' : ''}`}>
                                                    <input
                                                        type='radio'
                                                        id={`${question.id}-${key}`}
                                                        name={`answer-${question.id}`}
                                                        value={key}
                                                        onChange={() => handleAnswerChange(question.id, key)}
                                                        checked={selectedAnswers[question.id] === key}
                                                    />
                                                    <label htmlFor={`${question.id}-${key}`}>{answer}</label>
                                                </div>
                                            ))}
                                        </div>
                                        {isCorrect[question.id] === true && <h6 className='reason'>Reason : {question.reason}</h6>}

                                        {isCorrect[question.id] === false && <h2 className='wrong-answer'>Wrong Answer .... Try Again</h2>}
                                        {isCorrect[question.id] === true && <h2 className='right-answer'>Correct</h2>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="abdelrhman-elsawy-365632204" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://eg.linkedin.com/in/abdelrhman-elsawy-365632204?trk=profile-badge"></a></div>

                </div>
            </section>


        </>
    );
}

export default Landing2;