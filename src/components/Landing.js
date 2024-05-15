import React, { useState, useEffect ,useRef} from 'react';
import './css/landing.css';

import correctSound  from './sounds/gdaa.mp3';

const questionsData = [
    {
        "lecture" : 7,
        "id": 1,
        "question": "What is the purpose of ETL?",
        "answers": {
            "a": "To reshape relevant data for the data warehouse",
            "b": "To store raw data",
            "c": "To delete unnecessary data"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 2,
        "question": "What happens if the source data is not extracted correctly in ETL?",
        "answers": {
            "a": "It will be transformed automatically",
            "b": "Query processing could not happen",
            "c": "The data will still be useful"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 3,
        "question": "What is needed for operational systems upgrade in data extraction?",
        "answers": {
            "a": "One-time extractions and data conversions",
            "b": "Multiple extractions",
            "c": "Only data conversions"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 4,
        "question": "What must be extracted for a data warehouse?",
        "answers": {
            "a": "Data from one source",
            "b": "Only new data",
            "c": "Data from many disparate sources"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 5,
        "question": "What is the purpose of job sequencing in data extraction?",
        "answers": {
            "a": "To start all jobs simultaneously",
            "b": "To ensure the beginning of one job waits until the previous job has finished",
            "c": "To prioritize jobs based on size"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 6,
        "question": "What is a major effort within data transformation?",
        "answers": {
            "a": "Storing data in raw format",
            "b": "Improvement of data quality",
            "c": "Deleting old data"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 7,
        "question": "What is the first task in data transformation?",
        "answers": {
            "a": "Conversion",
            "b": "Summarization",
            "c": "Selection"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 8,
        "question": "What is the task of splitting/joining in data transformation?",
        "answers": {
            "a": "To delete data",
            "b": "To manipulate and combine data",
            "c": "To store data as it is"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 9,
        "question": "Why is data conversion important?",
        "answers": {
            "a": "To keep data in raw format",
            "b": "To standardize data and make fields usable",
            "c": "To delete unnecessary fields"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 10,
        "question": "What is data summarization?",
        "answers": {
            "a": "Keeping data at the lowest level of detail",
            "b": "Deleting detailed data",
            "c": "Aggregating data to a higher level"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 11,
        "question": "What does enrichment involve in data transformation?",
        "answers": {
            "a": "Removing unnecessary fields",
            "b": "Rearranging and simplifying fields",
            "c": "Converting data formats"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 12,
        "question": "What is the initial load in data loading?",
        "answers": {
            "a": "Loading changes incrementally",
            "b": "Applying only new data",
            "c": "Populating all data warehouse tables for the first time"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 13,
        "question": "What is an incremental load?",
        "answers": {
            "a": "Loading all data again",
            "b": "Applying ongoing changes periodically",
            "c": "Deleting old data before loading new data"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 14,
        "question": "What does a full refresh involve in data loading?",
        "answers": {
            "a": "Incremental changes",
            "b": "Erasing and reloading data",
            "c": "Keeping old data"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 15,
        "question": "What does the load process do if the target table already has data?",
        "answers": {
            "a": "Preserves existing data",
            "b": "Wipes out existing data",
            "c": "Appends new data"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 16,
        "question": "What is the append process?",
        "answers": {
            "a": "Replaces existing data",
            "b": "Adds incoming data to existing data",
            "c": "Deletes duplicate data"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 17,
        "question": "What happens during a destructive merge?",
        "answers": {
            "a": "Keeps all old data",
            "b": "Updates matching records and adds new ones",
            "c": "Only adds new records"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 18,
        "question": "What is a constructive merge?",
        "answers": {
            "a": "Deletes old records",
            "b": "Updates existing records and adds new ones",
            "c": "Adds new records and marks them as superseding old ones"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 19,
        "question": "What are format revisions in data transformation?",
        "answers": {
            "a": "Converting data into a new structure",
            "b": "Keeping original data format",
            "c": "Deleting unnecessary formats"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 20,
        "question": "What are calculated and derived values?",
        "answers": {
            "a": "Raw data values",
            "b": "Values computed from other data",
            "c": "Non-essential data values"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 21,
        "question": "What does the splitting of single fields involve?",
        "answers": {
            "a": "Combining multiple fields",
            "b": "Dividing a field into multiple parts",
            "c": "Deleting unnecessary parts"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 22,
        "question": "What does merging of information involve?",
        "answers": {
            "a": "Keeping data separate",
            "b": "Combining data from different sources",
            "c": "Deleting redundant data"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 23,
        "question": "What is character set conversion?",
        "answers": {
            "a": "Changing data type",
            "b": "Converting character encoding",
            "c": "Deleting non-essential characters"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 24,
        "question": "What is the conversion of units of measurements?",
        "answers": {
            "a": "Standardizing measurement units",
            "b": "Keeping original units",
            "c": "Deleting non-standard units"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 25,
        "question": "What does date/time conversion involve?",
        "answers": {
            "a": "Keeping original date/time format",
            "b": "Standardizing date/time formats",
            "c": "Deleting non-essential date/time fields"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 26,
        "question": "What is key restructuring?",
        "answers": {
            "a": "Keeping original keys",
            "b": "Deleting old keys",
            "c": "Modifying keys for consistency"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 27,
        "question": "What is deduplication?",
        "answers": {
            "a": "Keeping all records",
            "b": "Removing duplicate records",
            "c": "Adding new duplicates"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 28,
        "question": "What does the ETL tool do?",
        "answers": {
            "a": "Transforms raw data",
            "b": "Loads data",
            "c": "Both transforming and loading data"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 29,
        "question": "What is a major challenge in data extraction?",
        "answers": {
            "a": "Data quality",
            "b": "Exception handling",
            "c": "Format conversion"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 30,
        "question": "What is the main goal of ETL?",
        "answers": {
            "a": "To delete old data",
            "b": "To store raw data",
            "c": "To transform and load data into a useful format"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 31,
        "question": "ETL functions reshape the relevant data from the source systems into useful information.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 32,
        "question": "If the source data is not extracted correctly, cleansed, and integrated, the backbone of the data warehouse, could not happen.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 33,
        "question": "List of data extraction issues...",
        "answers": {
            "a": "Identify source applications and source structures.",
            "b": "For each data source, define whether the extraction process is manual or tool-based",
            "c": "Determine how to handle input records that cannot be extracted",
            "d": "All the above"
        },
        "correct": "d"
    },
    {
        "lecture" : 7,
        "id": 34,
        "question": "Determine whether the beginning of one job in an extraction job stream has to wait until the previous job has finished successfully.",
        "answers": {
            "a": "Source Identification",
            "b": "Method of extraction",
            "c": "Job sequencing"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 35,
        "question": "Determine how to handle input records that cannot be extracted.",
        "answers": {
            "a": "Source Identification",
            "b": "Exception handling",
            "c": "Job sequencing"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 36,
        "question": "All the extracted data must be made unusable in the data warehouse.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 37,
        "question": "Data quality is not important in the data warehouse.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 38,
        "question": "Beginning of the whole process of data transformation. Select either whole records or parts of several records from the source systems.",
        "answers": {
            "a": "Selection",
            "b": "Conversion",
            "c": "Splitting"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 39,
        "question": "You will be splitting the selected parts even further during data transformation.",
        "answers": {
            "a": "Conversion",
            "b": "Splitting"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 40,
        "question": "It is important task to make the fields usable and understandable to the users.",
        "answers": {
            "a": "Conversion",
            "b": "Splitting",
            "c": "Joining"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 41,
        "question": "Rearrangement and simplification of individual fields to make them more useful for the data warehouse environment.",
        "answers": {
            "a": "Splitting",
            "b": "Enrichment",
            "c": "Joining"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 42,
        "question": "Major Transformation Types...",
        "answers": {
            "a": "Format Revisions",
            "b": "Calculated and Derived Values.",
            "c": "Splitting of Single Fields",
            "d": "All the above"
        },
        "correct": "d"
    },
    {
        "lecture" : 7,
        "id": 43,
        "question": "Populating all the data warehouse tables for the very first time.",
        "answers": {
            "a": "Initial Load",
            "b": "Incremental Load",
            "c": "Full Refresh"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 44,
        "question": "Incremental Load \u2014 applying ongoing changes as necessary in a periodic manner.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 45,
        "question": "Completely erasing the contents of one or more tables and reloading with fresh data.",
        "answers": {
            "a": "Incremental Load",
            "b": "Full Refresh"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 46,
        "question": "The load process wipes out the existing data and applies the data from the incoming file.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 47,
        "question": "Destructive Merge is an extension of the load.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b"
    },
    {
        "lecture" : 7,
        "id": 48,
        "question": "Destructive Merge applies incoming data to the target data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a"
    },
    {
        "lecture" : 7,
        "id": 49,
        "question": "If the primary key of an incoming record matches with the key of an existing record, update the matching target record.",
        "answers": {
            "a": "Load",
            "b": "Append",
            "c": "Destructive Merge"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 50,
        "question": "If the primary key of an incoming record matches with the key of an existing record, leave the existing record, add the incoming record, and mark the added record as superseding the old record.",
        "answers": {
            "a": "Load",
            "b": "Append",
            "c": "Constructive Merge"
        },
        "correct": "c"
    },
    {
        "lecture" : 7,
        "id": 51,
        "question": "ETL Tools...",
        "answers": {
            "a": "NiFi",
            "b": "Talend",
            "c": "Both"
        },
        "correct": "c"
    },
    {
        "id": 52,
        "question": "What does OLAP stand for?",
        "answers": {
            "a": "Online Analytical Processing",
            "b": "Online Analytical Programming",
            "c": "Online Analytical Presentation"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 53,
        "question": "Which of the following is NOT a characteristic of OLAP?",
        "answers": {
            "a": "It is a technology for extracting and viewing business data",
            "b": "It is a database design technique",
            "c": "It enables analysts to view data from different points of view"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 54,
        "question": "OLAP databases are divided into one or more what?",
        "answers": {
            "a": "Tables",
            "b": "Cubes",
            "c": "Rows"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 55,
        "question": "What does OLAP allow analysts to do with data?",
        "answers": {
            "a": "Group, aggregate, and join data",
            "b": "Delete and update data",
            "c": "Only view data"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 56,
        "question": "Which OLAP operation is also known as consolidation?",
        "answers": {
            "a": "Roll-up",
            "b": "Drill-down",
            "c": "Pivot"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 57,
        "question": "What does the drill-down operation in OLAP do?",
        "answers": {
            "a": "Aggregates data",
            "b": "Fragments data into smaller parts",
            "c": "Rotates data axes"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 58,
        "question": "Which OLAP operation involves selecting one dimension to create a new sub-cube?",
        "answers": {
            "a": "Slice",
            "b": "Dice",
            "c": "Pivot"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 59,
        "question": "What does the pivot operation in OLAP do?",
        "answers": {
            "a": "Reduces dimensions",
            "b": "Climbs up concept hierarchy",
            "c": "Rotates data axes"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 60,
        "question": "What type of data model does MOLAP utilize?",
        "answers": {
            "a": "Relational",
            "b": "Multidimensional",
            "c": "Hierarchical"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 61,
        "question": "What is a major advantage of MOLAP?",
        "answers": {
            "a": "High scalability",
            "b": "Fastest indexing to pre-computed summarized data",
            "c": "Low storage utilization"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 62,
        "question": "What is a disadvantage of MOLAP?",
        "answers": {
            "a": "High data efficiency",
            "b": "Low storage utilization",
            "c": "Slow query performance"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 63,
        "question": "Which OLAP model uses a relational database to store both base data and dimension tables?",
        "answers": {
            "a": "MOLAP",
            "b": "HOLAP",
            "c": "ROLAP"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 64,
        "question": "What is an advantage of ROLAP?",
        "answers": {
            "a": "Fast computation",
            "b": "High data efficiency",
            "c": "Low resource demand"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 65,
        "question": "What is a drawback of ROLAP?",
        "answers": {
            "a": "High resource demand",
            "b": "Slow query performance",
            "c": "Low data efficiency"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 66,
        "question": "What is Hybrid OLAP a mixture of?",
        "answers": {
            "a": "MOLAP and ROLAP",
            "b": "ROLAP and HOLAP",
            "c": "MOLAP and HOLAP"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 67,
        "question": "Which OLAP model stores aggregated or computed data in a multidimensional cube?",
        "answers": {
            "a": "MOLAP",
            "b": "ROLAP",
            "c": "HOLAP"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 68,
        "question": "What is a benefit of Hybrid OLAP?",
        "answers": {
            "a": "Greater complexity",
            "b": "Economizes disk space",
            "c": "Slow performance"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 69,
        "question": "What is a drawback of Hybrid OLAP?",
        "answers": {
            "a": "Higher resource demand",
            "b": "Greater complexity",
            "c": "Low storage utilization"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 70,
        "question": "What is the objective of OLAP?",
        "answers": {
            "a": "Support very fast, iterative, and ad-hoc decision-making",
            "b": "Support predefined queries only",
            "c": "Support only detailed data analysis"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 71,
        "question": "What are the basic analytical operations of OLAP?",
        "answers": {
            "a": "Roll-up, Drill-down, Slice, and Pivot",
            "b": "Aggregate, Filter, Sort, and Join",
            "c": "Delete, Update, Insert, and Select"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 72,
        "question": "What does the roll-up operation in OLAP involve?",
        "answers": {
            "a": "Reducing dimensions or climbing up concept hierarchy",
            "b": "Increasing dimensions",
            "c": "Rotating data axes"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 73,
        "question": "What does the slice operation in OLAP involve?",
        "answers": {
            "a": "Creating a new sub-cube by selecting one dimension",
            "b": "Creating a new sub-cube by selecting multiple dimensions",
            "c": "Aggregating data"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 74,
        "question": "What does the pivot operation in OLAP involve?",
        "answers": {
            "a": "Rotating data axes for substitute presentation of data",
            "b": "Aggregating data",
            "c": "Fragmenting data"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 75,
        "question": "What is an advantage of MOLAP?",
        "answers": {
            "a": "Easier to use for inexperienced users",
            "b": "Contains detailed data",
            "c": "Low storage utilization"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 76,
        "question": "What is a disadvantage of MOLAP?",
        "answers": {
            "a": "High storage utilization",
            "b": "Difficult to change dimensions without re-aggregating",
            "c": "Low data efficiency"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 77,
        "question": "Which tool is an example of MOLAP?",
        "answers": {
            "a": "SQL Server Data Tools (SSDT)",
            "b": "Clear Analytics",
            "c": "Both"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 78,
        "question": "What is a benefit of Hybrid OLAP?",
        "answers": {
            "a": "Allows faster performance for all types of data",
            "b": "Higher complexity",
            "c": "Low data efficiency"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 79,
        "question": "Which OLAP model is primarily used for data stored in a relational database?",
        "answers": {
            "a": "MOLAP",
            "b": "ROLAP",
            "c": "HOLAP"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 80,
        "question": "What is a drawback of ROLAP?",
        "answers": {
            "a": "High resource demand",
            "b": "Fast query performance",
            "c": "Low data efficiency"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 81,
        "question": "What does OLAP enable analysts to do?",
        "answers": {
            "a": "Extract and view business data from different points of view",
            "b": "Only view data",
            "c": "Delete and update data"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 82,
        "question": "ETL functions reshape the relevant data from the source systems into useful information.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 83,
        "question": "If the source data is not extracted correctly, cleansed, and integrated, the backbone of the data warehouse, could not happen.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 84,
        "question": "List of data extraction issues...",
        "answers": {
            "a": "Identify source applications and source structures.",
            "b": "For each data source, define whether the extraction process is manual or tool-based",
            "c": "Determine how to handle input records that cannot be extracted",
            "d": "All the above"
        },
        "correct": "d",
        "lecture": 8
    },
    {
        "id": 85,
        "question": "Determine whether the beginning of one job in an extraction job stream has to wait until the previous job has finished successfully.",
        "answers": {
            "a": "Source Identification",
            "b": "Method of extraction",
            "c": "Job sequencing"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 86,
        "question": "Determine how to handle input records that cannot be extracted.",
        "answers": {
            "a": "Source Identification",
            "b": "Exception handling",
            "c": "Job sequencing"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 87,
        "question": "All the extracted data must be made unusable in the data warehouse.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 88,
        "question": "Data quality is not important in the data warehouse.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 89,
        "question": "Beginning of the whole process of data transformation. Select either whole records or parts of several records from the source systems.",
        "answers": {
            "a": "Selection",
            "b": "Conversion",
            "c": "Splitting"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 90,
        "question": "You will be splitting the selected parts even further during data transformation.",
        "answers": {
            "a": "Conversion",
            "b": "Splitting"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 91,
        "question": "It is important task to make the fields usable and understandable to the users.",
        "answers": {
            "a": "Conversion",
            "b": "Splitting",
            "c": "Joining"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 92,
        "question": "Rearrangement and simplification of individual fields to make them more useful for the data warehouse environment.",
        "answers": {
            "a": "Splitting",
            "b": "Enrichment",
            "c": "Joining"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 93,
        "question": "Major Transformation Types...",
        "answers": {
            "a": "Format Revisions",
            "b": "Calculated and Derived Values.",
            "c": "Splitting of Single Fields",
            "d": "All the above"
        },
        "correct": "d",
        "lecture": 8
    },
    {
        "id": 94,
        "question": "Populating all the data warehouse tables for the very first time.",
        "answers": {
            "a": "Initial Load",
            "b": "Incremental Load",
            "c": "Full Refresh"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 95,
        "question": "Incremental Load \u2014 applying ongoing changes as necessary in a periodic manner.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 96,
        "question": "Completely erasing the contents of one or more tables and reloading with fresh data.",
        "answers": {
            "a": "Incremental Load",
            "b": "Full Refresh"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 97,
        "question": "The load process wipes out the existing data and applies the data from the incoming file.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 98,
        "question": "Destructive Merge is an extension of the load.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 99,
        "question": "Destructive Merge applies incoming data to the target data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 100,
        "question": "If the primary key of an incoming record matches with the key of an existing record, update the matching target record.",
        "answers": {
            "a": "Load",
            "b": "Append",
            "c": "Destructive Merge"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 101,
        "question": "If the primary key of an incoming record matches with the key of an existing record, leave the existing record, add the incoming record, and mark the added record as superseding the old record.",
        "answers": {
            "a": "Load",
            "b": "Append",
            "c": "Constructive Merge"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 102,
        "question": "ETL Tools...",
        "answers": {
            "a": "NiFi",
            "b": "Talend",
            "c": "Both"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 103,
        "question": "ROLAP servers store and manage warehouse data using RDBMS, and OLAP middleware fills in the gaps.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 104,
        "question": "Advantages of ROLAP model...",
        "answers": {
            "a": "High data efficiency.",
            "b": "Scalability.",
            "c": "All"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 105,
        "question": "Drawbacks of ROLAP model...",
        "answers": {
            "a": "Demand for higher resources.",
            "b": "Aggregately data limitations.",
            "c": "Slow query performance.",
            "d": "All the above"
        },
        "correct": "d",
        "lecture": 8
    },
    {
        "id": 106,
        "question": "What is a mixture of both ROLAP and MOLAP?",
        "answers": {
            "a": "Hybrid OLAP",
            "b": "ROLAP"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 107,
        "question": "Drawbacks of Hybrid OLAP...",
        "answers": {
            "a": "Greater complexity level.",
            "b": "Potential overlaps.",
            "c": "All the above"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 108,
        "question": "The major drawback in HOLAP systems is that it supports both ROLAP and MOLAP tools and applications.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 109,
        "question": "Adhoc analysis refers to the process of analyzing data in a flexible and exploratory manner.",
        "answers": {
            "a": "Adhoc analysis",
            "b": "TV analysis"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 110,
        "question": "Characteristics of Adhoc analysis...",
        "answers": {
            "a": "It's typically unplanned and focuses on immediate needs or questions.",
            "b": "Ad hoc analyses are often one-time or infrequent tasks.",
            "c": "A&B"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 111,
        "question": "Ad hoc analysis is useful for quick insights, troubleshooting.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 112,
        "question": "Interactive analysis involves a more structured and iterative approach to data exploration.",
        "answers": {
            "a": "Ad hoc analysis",
            "b": "Interactive analysis"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 113,
        "question": "Interactive analysis allows users to interact with data visualizations, dashboards, and reports in real-time.",
        "answers": {
            "a": "Ad hoc analysis",
            "b": "Interactive analysis"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 114,
        "question": "Characteristics of Interactive analysis...",
        "answers": {
            "a": "It often involves predefined dashboards or reports that users can interact with to drill down into details.",
            "b": "Enables users to manipulate data visualizations, change parameters, and perform analysis on-the-fly.",
            "c": "All the above"
        },
        "correct": "c",
        "lecture": 8
    },
    {
        "id": 115,
        "question": "Interactive analysis supports ongoing monitoring.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 116,
        "question": "Interactive analysis is valuable for continuous monitoring and trend analysis.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 117,
        "question": "Interactive analysis is more spontaneous and focused on immediate needs.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 118,
        "question": "Ad hoc analysis is more structured, iterative, and conducive to ongoing data exploration.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 119,
        "question": "Query performance is fastest in...",
        "answers": {
            "a": "MOLAP",
            "b": "ROLAP",
            "c": "HOLAP"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 120,
        "question": "ROLAP needs to manage both relational DBMS and metadata layer.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 121,
        "question": "OLAP focuses on information out.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 122,
        "question": "OLTP is based on the entity relationship model.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 123,
        "question": "OLTP is used to analyze the business.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 8
    },
    {
        "id": 124,
        "question": "Data volume in MOLAP is limited by physical cube.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 8
    },
    {
        "id": 125,
        "question": "What is a conformed dimension?",
        "answers": {
            "a": "A dimension used in different facts with the same meaning and value",
            "b": "A dimension used multiple times within the same fact",
            "c": "A dimension with alternate versions"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 126,
        "question": "What is a degenerate dimension?",
        "answers": {
            "a": "A dimension with no actual dimension table",
            "b": "A dimension that changes slowly over time",
            "c": "A dimension with multiple alternate versions"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 127,
        "question": "Which type of dimension is used for handling multi-valued dimensions?",
        "answers": {
            "a": "Conformed dimension",
            "b": "Bridge table",
            "c": "Role-playing dimension"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 128,
        "question": "What is the primary key of the Account-Insured_Person bridge table?",
        "answers": {
            "a": "Surrogate Account and Insured_Person foreign keys",
            "b": "Policy number",
            "c": "Customer ID"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 129,
        "question": "What is a weighting factor in a bridge table?",
        "answers": {
            "a": "A way to allocate numeric additive facts across insured persons",
            "b": "A way to identify primary policy holders",
            "c": "A method to reduce data redundancy"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 130,
        "question": "How is a hot swappable dimension defined?",
        "answers": {
            "a": "A dimension that has multiple alternate versions that can be swapped at query time",
            "b": "A dimension used multiple times within the same fact",
            "c": "A dimension that changes rapidly over time"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 131,
        "question": "What is a role-playing dimension?",
        "answers": {
            "a": "A dimension used multiple times within the same fact but with different meanings",
            "b": "A dimension with alternate versions",
            "c": "A dimension used in different facts with the same meaning and value"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 132,
        "question": "Which data warehouse development approach is supported by Bill Inmon?",
        "answers": {
            "a": "Top-down development approach",
            "b": "Bottom-up development approach",
            "c": "Middle-out development approach"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 133,
        "question": "What is a key characteristic of the top-down approach?",
        "answers": {
            "a": "Analyze global business needs, plan, design, and implement as a whole",
            "b": "Incrementally build data marts",
            "c": "Focus on a specific department's needs first"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 134,
        "question": "What is a key disadvantage of the top-down approach?",
        "answers": {
            "a": "High exposure to risk of failure",
            "b": "Faster implementation",
            "c": "Low initial costs"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 135,
        "question": "Which data warehouse development approach is supported by Ralph Kimball?",
        "answers": {
            "a": "Top-down development approach",
            "b": "Bottom-up development approach",
            "c": "Middle-out development approach"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 136,
        "question": "What is a key characteristic of the bottom-up approach?",
        "answers": {
            "a": "Incrementally build data marts",
            "b": "Analyze global business needs first",
            "c": "High initial costs"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 137,
        "question": "What is a key disadvantage of the bottom-up approach?",
        "answers": {
            "a": "Each data mart has its own narrow view of data",
            "b": "Long-term implementations",
            "c": "High initial costs"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 138,
        "question": "What is a hub-and-spoke architecture?",
        "answers": {
            "a": "A centralized data warehouse with several dependent data marts",
            "b": "Independent data marts",
            "c": "A centralized data warehouse without dependent data marts"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 139,
        "question": "What is a centralized data warehouse architecture?",
        "answers": {
            "a": "A centralized data warehouse without dependent data marts",
            "b": "Independent data marts",
            "c": "A data mart bus architecture"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 140,
        "question": "What is a key benefit of the centralized data warehouse architecture?",
        "answers": {
            "a": "Provides a holistic view of the enterprise",
            "b": "Reduces data redundancy",
            "c": "Improves data latency"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 141,
        "question": "What is a key disadvantage of independent data marts?",
        "answers": {
            "a": "Inconsistent data definitions",
            "b": "High initial costs",
            "c": "Centralized control"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 142,
        "question": "What is a data mart bus architecture?",
        "answers": {
            "a": "Individual marts linked via middleware",
            "b": "Independent data marts",
            "c": "A centralized data warehouse without dependent data marts"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 143,
        "question": "What is a key benefit of the data mart bus architecture?",
        "answers": {
            "a": "Maintains data consistency across the enterprise",
            "b": "High initial costs",
            "c": "Reduces data redundancy"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 144,
        "question": "What is a conformed dimension?",
        "answers": {
            "a": "A dimension used in different facts with the same meaning and value",
            "b": "A dimension used multiple times within the same fact",
            "c": "A dimension with alternate versions"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 145,
        "question": "What is a degenerate dimension?",
        "answers": {
            "a": "A dimension with no actual dimension table",
            "b": "A dimension that changes slowly over time",
            "c": "A dimension with multiple alternate versions"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 146,
        "question": "Which type of dimension is used for handling multi-valued dimensions?",
        "answers": {
            "a": "Conformed dimension",
            "b": "Bridge table",
            "c": "Role-playing dimension"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 147,
        "question": "What is the primary key of the Account-Insured_Person bridge table?",
        "answers": {
            "a": "Surrogate Account and Insured_Person foreign keys",
            "b": "Policy number",
            "c": "Customer ID"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 148,
        "question": "What is a weighting factor in a bridge table?",
        "answers": {
            "a": "A way to allocate numeric additive facts across insured persons",
            "b": "A way to identify primary policy holders",
            "c": "A method to reduce data redundancy"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 149,
        "question": "How is a hot swappable dimension defined?",
        "answers": {
            "a": "A dimension that has multiple alternate versions that can be swapped at query time",
            "b": "A dimension used multiple times within the same fact",
            "c": "A dimension that changes rapidly over time"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 150,
        "question": "What is a role-playing dimension?",
        "answers": {
            "a": "A dimension used multiple times within the same fact but with different meanings",
            "b": "A dimension with alternate versions",
            "c": "A dimension used in different facts with the same meaning and value"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 151,
        "question": "Which data warehouse development approach is supported by Bill Inmon?",
        "answers": {
            "a": "Top-down development approach",
            "b": "Bottom-up development approach",
            "c": "Middle-out development approach"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 152,
        "question": "What is a key characteristic of the top-down approach?",
        "answers": {
            "a": "Analyze global business needs, plan, design, and implement as a whole",
            "b": "Incrementally build data marts",
            "c": "Focus on a specific department's needs first"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 153,
        "question": "What is a key disadvantage of the top-down approach?",
        "answers": {
            "a": "High exposure to risk of failure",
            "b": "Faster implementation",
            "c": "Low initial costs"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 154,
        "question": "Which data warehouse development approach is supported by Ralph Kimball?",
        "answers": {
            "a": "Top-down development approach",
            "b": "Bottom-up development approach",
            "c": "Middle-out development approach"
        },
        "correct": "b",
        "lecture": 6
    },
    
    {
        "id": 155,
        "question": "Interactive analysis involves a more structured and iterative approach to data exploration.",
        "answers": {
            "a": "Ad hoc analysis",
            "b": "Interactive analysis"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 156,
        "question": "Interactive analysis allows users to interact with data visualizations, dashboards, and reports in real-time.",
        "answers": {
            "a": "Ad hoc analysis",
            "b": "Interactive analysis"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 157,
        "question": "Characteristics of Interactive analysis...",
        "answers": {
            "a": "It often involves predefined dashboards or reports that users can interact with to drill down into details.",
            "b": "Enables users to manipulate data visualizations, change parameters, and perform analysis on-the-fly.",
            "c": "All the above"
        },
        "correct": "c",
        "lecture": 6
    },
    {
        "id": 158,
        "question": "Interactive analysis supports ongoing monitoring.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 159,
        "question": "Interactive analysis is valuable for continuous monitoring and trend analysis.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 160,
        "question": "Interactive analysis is more spontaneous and focused on immediate needs.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 161,
        "question": "Ad hoc analysis is more structured, iterative, and conducive to ongoing data exploration.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 162,
        "question": "Query performance is fastest in...",
        "answers": {
            "a": "MOLAP",
            "b": "ROLAP",
            "c": "HOLAP"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 163,
        "question": "ROLAP needs to manage both relational DBMS and metadata layer.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 164,
        "question": "OLAP focuses on information out.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 165,
        "question": "OLTP is based on the entity relationship model.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 166,
        "question": "OLTP is used to analyze the business.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 167,
        "question": "Data volume in MOLAP is limited by physical cube.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 168,
        "question": "Bottom-Up approach includes...",
        "answers": {
            "a": "Keeps the interest for the project constantly high",
            "b": "May determine a partial vision of the business domain",
            "c": "Enables designers to investigate one area at a time",
            "d": "All the above"
        },
        "correct": "d",
        "lecture": 6
    },
    {
        "id": 169,
        "question": "Bottom-Up approach advantages include...",
        "answers": {
            "a": "Favorable return on investment and proof of concept",
            "b": "Each data mart has its own narrow view of data",
            "c": "Overall benefit to the business may be minimized"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 170,
        "question": "Bottom-Up approach allows faster and easier implementation of manageable pieces.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 171,
        "question": "Bottom-Up approach doesn\u2019t allow project team to learn and grow.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 172,
        "question": "Bottom-Up approach disadvantages include...",
        "answers": {
            "a": "Each data mart has its own narrow view of data",
            "b": "Overall benefit to the business may be minimized",
            "c": "Permeates redundant data in every data mart",
            "d": "All the above"
        },
        "correct": "d",
        "lecture": 6
    },
    {
        "id": 173,
        "question": "Bottom-Up approach has less risk of failure.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 174,
        "question": "Inmon Architecture structure...",
        "answers": {
            "a": "Enterprise-wide (atomic) data warehouse 'feeds' departmental databases",
            "b": "DMs model a single business process, and enterprise consistency"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 175,
        "question": "Kimball Complexity of the method is...",
        "answers": {
            "a": "Quite complex",
            "b": "Fairly simple"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 176,
        "question": "Kimball Comparison with established development methodologies is...",
        "answers": {
            "a": "Four-step process; a departure from RDBMS methods",
            "b": "Derived from the spiral methodology"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 177,
        "question": "Inmon Data orientation is subject or data driven.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 178,
        "question": "This architecture is a viable alternative to the independent DMs.",
        "answers": {
            "a": "Data mart bus architecture",
            "b": "Hub-and-spoke architecture"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 179,
        "question": "It allows for complex data queries across DMs.",
        "answers": {
            "a": "Data mart bus architecture",
            "b": "Hub-and-spoke architecture"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 180,
        "question": "This is perhaps the most famous data warehousing architecture today.",
        "answers": {
            "a": "Data mart bus architecture",
            "b": "Hub-and-spoke architecture"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 181,
        "question": "This architecture lacks the holistic enterprise view and may lead to data redundancy and data latency.",
        "answers": {
            "a": "Data mart bus architecture",
            "b": "Hub-and-spoke architecture"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 182,
        "question": "The centralized data warehouse architecture is similar to the hub-and-spoke architecture except that there are no dependent DMs.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 183,
        "question": "This architecture provides users with access to all data in the data warehouse instead of limiting them to DMs.",
        "answers": {
            "a": "Data mart bus architecture",
            "b": "Centralized data warehouse"
        },
        "correct": "b",
        "lecture": 6
    },
    {
        "id": 184,
        "question": "Centralized data warehouse reduces the amount of data the technical team has to transfer or change.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 185,
        "question": "This architecture provides a timely and holistic view of the enterprise to whoever, whenever, and wherever they may be within the organization.",
        "answers": {
            "a": "Centralized data warehouse",
            "b": "Hub-and-spoke architecture"
        },
        "correct": "a",
        "lecture": 6
    },
    {
        "id": 186,
        "question": "What is a conformed dimension?",
        "answers": {
            "a": "A dimension used in different facts with the same meaning and value",
            "b": "A dimension used multiple times within the same fact",
            "c": "A dimension with alternate versions"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 187,
        "question": "A typical conformed dimension is the date. Its meaning varies by fact table.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 188,
        "question": "A conformed dimension can refer to multiple tables in multiple data marts within the same organization.",
        "answers": {
            "a": "Degenerate Dimension",
            "b": "Conformed Dimension",
            "c": "Outrigger Dimension"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 189,
        "question": "What is a dimension key without corresponding dimension table?",
        "answers": {
            "a": "Degenerate Dimension",
            "b": "Conformed Dimension",
            "c": "Outrigger Dimension"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 190,
        "question": "A conformed dimension can be associated with different fact tables.",
        "answers": {
            "a": "Degenerate Dimension",
            "b": "Conformed Dimension",
            "c": "Outrigger Dimension"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 191,
        "question": "Degenerate dimensions are typically derived from the source data and are often codes or numbers that uniquely identify a transaction or an event.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 192,
        "question": "Degenerate dimensions have no attributes other than a key. They are often used in fact tables to store values that are not part of any other dimension.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 193,
        "question": "Degenerate dimensions do not have a dimension table because all the interesting attributes have been placed in analytic dimensions.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 194,
        "question": "Degenerate dimensions are used to provide a grouping for business cases.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 195,
        "question": "Degenerate dimensions are a type of dimension that have attributes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 196,
        "question": "What is a junk dimension?",
        "answers": {
            "a": "A dimension that involves combining low-cardinality fields or attributes into a single dimension table",
            "b": "A dimension used in different facts with the same meaning and value",
            "c": "A dimension with multiple alternate versions"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 197,
        "question": "These low-cardinality fields in a junk dimension may represent different categories or flags that have a limited number of possible values.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 198,
        "question": "A junk dimension reduces the number of dimension tables in a data warehouse.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 199,
        "question": "A junk dimension reduces the number of columns in the fact table.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 200,
        "question": "A junk dimension optimizes space as fact tables should not include low-cardinality or text fields.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 201,
        "question": "Junk dimensions are also called cross-reference dimensions.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 202,
        "question": "In a junk dimension, each combination of the low-cardinality attributes is assigned a unique identifier.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 203,
        "question": "Assigning a unique identifier in a junk dimension allows the dimension table to represent all the possible combinations of the attributes in a compact and efficient manner.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 204,
        "question": "The original attributes are replaced with references to the surrogate key in fact tables in a junk dimension, reducing the overall data storage requirements.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 205,
        "question": "Junk dimension advantages include:",
        "answers": {
            "a": "Simplifies Data Transformations",
            "b": "Reduces Data Storage",
            "c": "All the above"
        },
        "correct": "c",
        "lecture": 5
    },
    {
        "id": 206,
        "question": "By consolidating multiple low-cardinality attributes into a single dimension table, a junk dimension simplifies the data transformation process in ETL pipelines.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 207,
        "question": "A conformed dimension can improve query performance by reducing the number of table joins required for querying data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 208,
        "question": "Putting attributes into an existing dimension is a better alternative than using a junk dimension.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 209,
        "question": "Leaving attributes in the fact table instead of using a junk dimension results in a cluttered table with large row sizes and affects speed.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 210,
        "question": "Making attributes into separate dimensions instead of using a junk dimension results in an overly complex model with too many tables, affecting speed and maintenance.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 211,
        "question": "A 'customer type' flag with values like 'new,' 'returning,' or 'loyal' can be consolidated into a junk dimension.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 212,
        "question": "Creating a junk dimension replaces hard-coded options in applications, making it easier to maintain and change these codes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 213,
        "question": "A role-played dimension refers to a technique where a single dimension table is used in multiple ways within the same fact table.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 214,
        "question": "Role-playing dimensions help you analyze data from different perspectives without duplicating data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 215,
        "question": "An outrigger dimension is a secondary dimension table that is related to a primary dimension table in a star schema or snowflake schema.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },

    {
        "id": 221,
        "question": "Outrigger dimension is used in a star schema or snowflake schema.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 222,
        "question": "In Outrigger Dimension example, to analyze sales of specific product variations or products with detailed specifications, we would join the fact table with the relevant outrigger dimensions based on the product_key.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 223,
        "question": "From the Outrigger Dimension example, answer the following: Products dimension is not the primary dimension representing all products in the catalog.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 224,
        "question": "This outrigger dimension captures attributes specific to product variations (e.g., different colors and sizes).",
        "answers": {
            "a": "Product Variations",
            "b": "Product Specification"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 225,
        "question": "The fact table captures sales transactions, referencing both the base 'Products' dimension and the outrigger dimensions as needed.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 226,
        "question": "If we want to analyze sales of a particular laptop model with a 15\" screen and an Intel i5 processor, you would join the 'Sales' fact table with the 'Products' dimension and the 'Product Specifications' outrigger dimension using the product_key.",
        "answers": {
            "a": "Products and Product Specifications",
            "b": "Products and Product Variations",
            "c": "Both"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 227,
        "question": "We use outrigger dimension for\u2026",
        "answers": {
            "a": "Detail Separation",
            "b": "Scalability",
            "c": "Flexibility",
            "d": "Maintainability",
            "e": "All the above"
        },
        "correct": "e",
        "lecture": 5
    },
    {
        "id": 228,
        "question": "\u2026allow you to separate detailed information from the primary dimension table.",
        "answers": {
            "a": "Conformed dimension",
            "b": "Outrigger dimensions",
            "c": "None"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 229,
        "question": "Separating detailed information from the primary dimension table helps keep the primary dimension focused on essential attributes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 230,
        "question": "Adding new attributes directly to the primary dimension can lead to a wide, complex table.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 231,
        "question": "Outrigger dimensions provide a modular way to add additional attributes without affecting the core structure.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 232,
        "question": "\u2026offer flexibility in adapting to changing business requirements.",
        "answers": {
            "a": "Conformed dimension",
            "b": "Outrigger dimensions",
            "c": "None"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 233,
        "question": "By separating less frequently used attributes into an outrigger dimension, queries that do not require these details can avoid unnecessary joins, leading to improved query performance.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 234,
        "question": "Changes to detailed attributes can be localized to the outrigger dimension, reducing the impact on the primary dimension.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 235,
        "question": "\u2026is a dimension that has a hierarchy of attributes.",
        "answers": {
            "a": "Snowflake Dimension",
            "b": "Star schema",
            "c": "None"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 236,
        "question": "\u2026Dimensions have attributes that change over time.",
        "answers": {
            "a": "Conformed dimension",
            "b": "Degenerate dimension",
            "c": "Slowly changing Dimension"
        },
        "correct": "c",
        "lecture": 5
    },
    {
        "id": 237,
        "question": "Attributes that change over time. Products change price, cost, and composition. Employees are promoted, fired, this is a \u2026.",
        "answers": {
            "a": "Conformed dimension",
            "b": "Degenerate dimension",
            "c": "Slowly changing Dimension"
        },
        "correct": "c",
        "lecture": 5
    },
    {
        "id": 238,
        "question": "Operational applications do not track changes to dimensional values because transactions only need the most current values.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 239,
        "question": "Which Slowly changing Dimension type keeps original data?",
        "answers": {
            "a": "SCD type 0",
            "b": "SCD type 1",
            "c": "SCD type 2"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 240,
        "question": "Which Slowly changing Dimension type overwrites existing data (row) with new data?",
        "answers": {
            "a": "SCD type 0",
            "b": "SCD type 1",
            "c": "SCD type 2"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 241,
        "question": "Which Slowly changing Dimension type creates a new row for new values?",
        "answers": {
            "a": "SCD type 0",
            "b": "SCD type 1",
            "c": "SCD type 2"
        },
        "correct": "c",
        "lecture": 5
    },
    {
        "id": 242,
        "question": "Which Slowly changing Dimension type tracks changes using separate columns but overwrites the rest?",
        "answers": {
            "a": "SCD type 0",
            "b": "SCD type 1",
            "c": "SCD type 3",
            "d": "SCD type 4"
        },
        "correct": "c",
        "lecture": 5
    },
    {
        "id": 243,
        "question": "Which Slowly changing Dimension type adds a mini-dimension?",
        "answers": {
            "a": "SCD type 0",
            "b": "SCD type 1",
            "c": "SCD type 3",
            "d": "SCD type 4"
        },
        "correct": "d",
        "lecture": 5
    },
    {
        "id": 244,
        "question": "The technique that writes the original dimension record but then never updates it is\u2026",
        "answers": {
            "a": "SCD type 0",
            "b": "SCD type 1",
            "c": "SCD type 2"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 245,
        "question": "SCD type 0 is the least likely technique to be used.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 246,
        "question": "In SCD type 1 we do not lose the ability to track the history of the attributes.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 247,
        "question": "SCD type 2 enables you to track history accurately.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 248,
        "question": "SCD type 2 is relatively straightforward to implement.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 249,
        "question": "In SCD type 4 we split the data into two tables, one for the current record and one for the historical data.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 250,
        "question": "When we have a dimension with one or more of its attributes changing very fast, this is called a Fast Changing Dimension.",
        "answers": {
            "a": "True",
            "b": "False"
        },
        "correct": "a",
        "lecture": 5
    },
    {
        "id": 251,
        "question": "Separation of the attributes into one or more dimensions is also called\u2026",
        "answers": {
            "a": "Fast Changing Dimension",
            "b": "Mini-dimensions",
            "c": "Both"
        },
        "correct": "b",
        "lecture": 5
    },
    {
        "id": 252,
        "question": "What is the first step in the Dimensional model life cycle?",
        "answers": {"a": "Identify granularity of the facts", "b": "Gathering Requirements", "c": "Identify the dimensions"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 253,
        "question": "What does the grain control in a fact table?",
        "answers": {"a": "The dimensions available in fact", "b": "The physical event to be measured", "c": "The level of information represented"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 254,
        "question": "Which type of fact table records a business event or transaction?",
        "answers": {"a": "Periodic fact", "b": "Accumulating fact", "c": "Transaction fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 255,
        "question": "What is a characteristic of a transaction fact table?",
        "answers": {"a": "Contains one row per transaction", "b": "Summarizes measurement events", "c": "Stores one row for the entire process"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 256,
        "question": "What type of fact table stores data snapshots for a specific time?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 257,
        "question": "What type of fact table shows the activity of progress through a well-defined process?",
        "answers": {"a": "Accumulating fact", "b": "Periodic fact", "c": "Transaction fact"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 258,
        "question": "Which type of fact table is most likely to grow very fast?",
        "answers": {"a": "Periodic fact", "b": "Accumulating fact", "c": "Transaction fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 259,
        "question": "What is an example of a periodic fact table?",
        "answers": {"a": "Order life-cycle", "b": "Sales transaction", "c": "Inventory levels at the end of a quarter"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 260,
        "question": "Which measure type can be added across all dimensions?",
        "answers": {"a": "Semi_additive Facts", "b": "Additive Facts", "c": "Non_additive Facts"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 261,
        "question": "Which measure type can be added across some dimensions but not others?",
        "answers": {"a": "Additive Facts", "b": "Non_additive Facts", "c": "Semi_additive Facts"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 262,
        "question": "Which measure type cannot be added across any dimensions?",
        "answers": {"a": "Additive Facts", "b": "Semi_additive Facts", "c": "Non_additive Facts"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 263,
        "question": "Which measure type is created by performing a mathematical calculation on other facts?",
        "answers": {"a": "Derived Facts", "b": "Additive Facts", "c": "Non_additive Facts"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 264,
        "question": "What does a textual fact consist of?",
        "answers": {"a": "A number of other facts", "b": "One or more characters such as flags", "c": "The sum of all other facts"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 265,
        "question": "What type of dimension can be associated with different fact tables?",
        "answers": {"a": "Degenerate Dimension", "b": "Junk Dimension", "c": "Conformed Dimension"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 266,
        "question": "What is a degenerate dimension?",
        "answers": {"a": "A dimension key without corresponding dimension table", "b": "A dimension used to provide grouping for business cases", "c": "A dimension that changes slowly over time"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 267,
        "question": "Which dimension type is used to provide a grouping for business cases?",
        "answers": {"a": "Slowly changing Dimension", "b": "Degenerate Dimension", "c": "Junk Dimension"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 268,
        "question": "What type of dimension contains a single date shared by all fact tables?",
        "answers": {"a": "Conformed Dimension", "b": "Degenerate Dimension", "c": "Junk Dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 269,
        "question": "What type of dimension combines multiple low-cardinality attributes?",
        "answers": {"a": "Junk Dimension", "b": "Degenerate Dimension", "c": "Conformed Dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 270,
        "question": "What is an example of a role-playing dimension?",
        "answers": {"a": "Account balance", "b": "Order date", "c": "Inventory levels"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 271,
        "question": "What is a shrunken rollup dimension?",
        "answers": {"a": "A dimension key without a corresponding dimension table", "b": "A dimension that is a subset of a larger dimension", "c": "A dimension that changes rapidly"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 272,
        "question": "Which dimension type is used to handle rapidly changing attributes?",
        "answers": {"a": "Slowly changing Dimension", "b": "Junk Dimension", "c": "Fast Changing Dimension"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 273,
        "question": "What is a multi-valued dimension?",
        "answers": {"a": "A dimension key without a corresponding dimension table", "b": "A dimension that can take on multiple values", "c": "A dimension that combines multiple low-cardinality attributes"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 274,
        "question": "Which dimension type is used for attributes that change slowly over time?",
        "answers": {"a": "Slowly changing Dimension", "b": "Junk Dimension", "c": "Fast Changing Dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 275,
        "question": "What type of dimension contains a subset of attributes from another dimension?",
        "answers": {"a": "Shrunken Rollup Dimension", "b": "Degenerate Dimension", "c": "Conformed Dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 276,
        "question": "Which dimension type is known for handling heterogeneous data?",
        "answers": {"a": "Slowly changing Dimension", "b": "Heterogeneous Dimensions", "c": "Multi-valued dimensions"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 277,
        "question": "What type of dimension is often used to track changes in attributes over time?",
        "answers": {"a": "Fast Changing Dimension", "b": "Multi-valued dimensions", "c": "Slowly changing Dimension"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 278,
        "question": "Which type of dimension is used to handle low-cardinality attributes?",
        "answers": {"a": "Junk Dimension", "b": "Shrunken Rollup Dimension", "c": "Conformed Dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 279,
        "question": "What is the first step in the dimensional model life cycle?",
        "answers": {"a": "Identifying granularity of the facts", "b": "Gathering Requirements", "c": "Identifying the dimensions", "d": "Identifying the facts"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 280,
        "question": "Which type of fact table stores a record for each business event or transaction, one record at a time?",
        "answers": {"a": "Periodic fact", "b": "Accumulating fact", "c": "Transaction fact", "d": "Dimensional fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 281,
        "question": "What does the grain represent in a data model?",
        "answers": {"a": "The physical event being measured", "b": "The time interval of data collection", "c": "The number of dimensions in the model", "d": "The level of data aggregation"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 282,
        "question": "Which fact table type is suitable for showing the progression of a well-defined process, such as an order life-cycle?",
        "answers": {"a": "Periodic fact", "b": "Transaction fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 283,
        "question": "What characterizes an accumulating fact table?",
        "answers": {"a": "One row per transaction", "b": "Contains snapshots of data for specific time periods", "c": "Stores one row for the entire process", "d": "Stores data related to a group of transactions over a period"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 284,
        "question": "Which use case is suitable for an accumulating fact table?",
        "answers": {"a": "Real-time data analysis", "b": "Inventory management", "c": "Order life-cycle tracking", "d": "Yearly financial reporting"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 285,
        "question": "What is the primary purpose of gathering requirements in the dimensional model life cycle?",
        "answers": {"a": "Identifying granularity of the facts", "b": "Determining the dimensions", "c": "Understanding the business/user needs", "d": "Defining the facts"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 286,
        "question": "Which factor determines the level of information represented by the grain?",
        "answers": {"a": "Time intervals", "b": "Business process complexity", "c": "Physical event being measured", "d": "Dimensionality of the data"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 287,
        "question": "What is the key characteristic of a transaction fact table?",
        "answers": {"a": "Stores data for specific time periods", "b": "Aggregates data across multiple transactions", "c": "Records a single business event or transaction per row", "d": "Contains snapshots of data at regular intervals"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 288,
        "question": "Which type of fact table contains one row for a group of transactions over a period?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 289,
        "question": "What distinguishes an accumulating fact table from other types?",
        "answers": {"a": "It accumulates time intervals", "b": "It stores only summarized data", "c": "It stores one row for the entire process", "d": "It contains real-time data"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 290,
        "question": "In which scenario would an accumulating fact table be most beneficial?",
        "answers": {"a": "Real-time analytics", "b": "Yearly financial reporting", "c": "Order life-cycle tracking", "d": "Inventory management"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 291,
        "question": "What step comes after identifying the dimensions in the dimensional model life cycle?",
        "answers": {"a": "Gathering Requirements", "b": "Identifying granularity of the facts", "c": "Defining the facts", "d": "None of the above"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 292,
        "question": "What does the grain control in a dimensional model?",
        "answers": {"a": "Time intervals", "b": "Dimensionality of the data", "c": "Available dimensions in the fact table", "d": "Business process complexity"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 293,
        "question": "What type of fact table is known for growing rapidly as the number of transactions increases?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 294,
        "question": "Which type of fact table is suitable for summarizing measurement events occurring at predictable steps?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 295,
        "question": "What does a periodic fact table represent?",
        "answers": {"a": "A single business event or transaction per row", "b": "Summarized data for the entire process", "c": "Snapshots of data at specific time intervals", "d": "Real-time analytics"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 296,
        "question": "What does an accumulating fact table store?",
        "answers": {"a": "Data related to specific time periods", "b": "One row for each business event or transaction", "c": "Summarized data for the entire process", "d": "Snapshots of data at regular intervals"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 297,
        "question": "Which fact table type is used to track the progression of a business process?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 298,
        "question": "What does the grain represent in a dimensional model?",
        "answers": {"a": "Time intervals", "b": "Dimensionality of the data", "c": "Physical event being measured", "d": "Business process complexity"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 299,
        "question": "What characterizes an accumulating fact table?",
        "answers": {"a": "Stores one row for the entire process", "b": "Contains snapshots of data for specific time periods", "c": "Records a single business event or transaction per row", "d": "Aggregates data across multiple transactions"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 300,
        "question": "Which type of fact table stores data for a group of transactions over a period?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 301,
        "question": "What is the key characteristic of a transaction fact table?",
        "answers": {"a": "Contains snapshots of data at regular intervals", "b": "Records a single business event or transaction per row", "c": "Aggregates data across multiple transactions", "d": "Stores one row for the entire process"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 302,
        "question": "Which type of fact table is used for tracking the progression of a well-defined process?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 303,
        "question": "What does the grain represent in a dimensional model?",
        "answers": {"a": "Time intervals", "b": "Dimensionality of the data", "c": "Physical event being measured", "d": "Business process complexity"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 304,
        "question": "What characterizes an accumulating fact table?",
        "answers": {"a": "Stores one row for the entire process", "b": "Contains snapshots of data for specific time periods", "c": "Records a single business event or transaction per row", "d": "Aggregates data across multiple transactions"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 305,
        "question": "Which type of fact table stores data for a group of transactions over a period?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 306,
        "question": "What is the key characteristic of a transaction fact table?",
        "answers": {"a": "Contains snapshots of data at regular intervals", "b": "Records a single business event or transaction per row", "c": "Aggregates data across multiple transactions", "d": "Stores one row for the entire process"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 307,
        "question": "Which type of fact table is used for tracking the progression of a well-defined process?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 308,
        "question": "What is the purpose of the fact table named 'fact_claim_processing' in the telecom company example?",
        "answers": {"a": "Tracking customer complaints", "b": "Managing employee performance", "c": "Representing the claim life-cycle", "d": "Analyzing financial transactions"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 309,
        "question": "How does the 'fact_claim_processing' fact table get updated?",
        "answers": {"a": "Weekly basis", "b": "Monthly basis", "c": "After each stage finished", "d": "Annually"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 310,
        "question": "Which type of measure can be added across all dimensions?",
        "answers": {"a": "Additive", "b": "Semi-additive", "c": "Non-additive", "d": "Derived"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 311,
        "question": "What is an example of an additive fact?",
        "answers": {"a": "Account balance", "b": "Total sales revenue", "c": "Percentage ratio", "d": "Derived fact"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 312,
        "question": "Semi-additive facts can be added across:",
        "answers": {"a": "All dimensions", "b": "Some dimensions", "c": "No dimensions", "d": "Any dimension"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 313,
        "question": "What distinguishes non-additive facts from other types of measures?",
        "answers": {"a": "They can be added across all dimensions", "b": "They are the result of mathematical calculations", "c": "They cannot be added across any dimensions", "d": "They are stored inside the fact table"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 314,
        "question": "Derived facts are created by:",
        "answers": {"a": "Summing up existing measures", "b": "Performing mathematical calculations on other facts", "c": "Aggregating across dimensions", "d": "Storing textual data"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 315,
        "question": "What is the purpose of a textual fact?",
        "answers": {"a": "Summarizing business transactions", "b": "Performing mathematical operations", "c": "Storing one or more characters such as flags", "d": "Adding up across dimensions"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 316,
        "question": "What distinguishes a conformed dimension from other dimension types?",
        "answers": {"a": "It can be associated with different fact tables", "b": "It doesn’t vary by fact table", "c": "It has no corresponding dimension table", "d": "It is stored in the fact table"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 317,
        "question": "Which dimension type is associated with a unique date dimension shared by all fact tables?",
        "answers": {"a": "Conformed Dimension", "b": "Degenerate Dimension", "c": "Junk Dimension", "d": "Role-Playing Dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 318,
        "question": "What is the purpose of a degenerate dimension?",
        "answers": {"a": "To provide grouping for business cases", "b": "To store textual data", "c": "To represent different stages of a process", "d": "To track customer interactions"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 319,
        "question": "In which table is the dimension key stored for a degenerate dimension?",
        "answers": {"a": "Fact table", "b": "Dimension table", "c": "Junk dimension", "d": "Snowflake dimension"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 320,
        "question": "Which dimension type lacks a corresponding dimension table?",
        "answers": {"a": "Conformed Dimension", "b": "Degenerate Dimension", "c": "Junk Dimension", "d": "Role-Playing Dimension"},
        "correct": "b",
        "lecture": 4
    },
    {
        "id": 321,
        "question": "What characterizes a degenerate dimension?",
        "answers": {"a": "It contains textual data", "b": "It represents different stages of a process", "c": "It is stored in the fact table", "d": "It is associated with different fact tables"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 322,
        "question": "How are conformed dimensions defined?",
        "answers": {"a": "By their association with specific fact tables", "b": "By their variation across different dimensions", "c": "By their consistency across different fact tables", "d": "By their storage in the fact table"},
        "correct": "c",
        "lecture": 4
    },
    {
        "id": 323,
        "question": "Which type of fact table represents the claim life-cycle inside the telecom company?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Dimensional fact"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 324,
        "question": "What is the main characteristic of an additive fact?",
        "answers": {"a": "It can be added across all dimensions", "b": "It represents a ratio or percentage", "c": "It is stored inside the fact table", "d": "It cannot be added across any dimensions"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 325,
        "question": "What distinguishes a semi-additive fact from an additive fact?",
        "answers": {"a": "It can be added across all dimensions", "b": "It represents a ratio or percentage", "c": "It cannot be added across any dimensions", "d": "It can be added across some dimensions but not others"},
        "correct": "d",
        "lecture": 4
    },
    {
        "id": 326,
        "question": "What type of fact table contains detail related to claim processing stages?",
        "answers": {"a": "Transaction fact", "b": "Periodic fact", "c": "Accumulating fact", "d": "Junk fact"},
        "correct": "a",
        "lecture": 4
    },
    {
        "id": 327,
        "question": "What is the main purpose of a data warehouse?",
        "answers": {"a": "To store transactional data", "b": "To provide meaningful business insights", "c": "To process online transactions"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 328,
        "question": "Which of the following is NOT a main type of data warehouse?",
        "answers": {"a": "Data marts (DMs)", "b": "Operational data stores (ODS)", "c": "Relational database systems (RDS)"},
        "correct": "c",
        "lecture":  3
    },
    {
        "id": 329,
        "question": "What is a data mart typically focused on?",
        "answers": {"a": "A particular subject or department", "b": "Entire enterprise", "c": "Online transaction processing"},
        "correct": "a",
        "lecture":  3
    },
    {
        "id": 330,
        "question": "What is an independent data mart?",
        "answers": {"a": "A data mart created directly from the data warehouse", "b": "A small warehouse designed for a strategic business unit or department", "c": "A type of data warehouse"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 331,
        "question": "What type of information does an operational data store (ODS) provide?",
        "answers": {"a": "Historical data", "b": "Current, volatile data", "c": "Predicted data"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 332,
        "question": "What is a key feature of an enterprise data warehouse (EDW)?",
        "answers": {"a": "It is used for short-term decisions", "b": "It provides integration of data from many sources", "c": "It is a small-scale data warehouse"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 333,
        "question": "Which modeling technique is better suited for business intelligence (BI) applications?",
        "answers": {"a": "ER modeling", "b": "Dimensional modeling", "c": "Transactional modeling"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 334,
        "question": "What is the purpose of dimensional modeling?",
        "answers": {"a": "To process online transactions", "b": "To enable BI reporting, query, and analysis", "c": "To store transactional data"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 335,
        "question": "What do dimensions in dimensional modeling define?",
        "answers": {"a": "The numeric measurements", "b": "The business context for the measures", "c": "The level of detail"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 336,
        "question": "What are the main components of a fact table?",
        "answers": {"a": "Dimensions and measures", "b": "Keys and measures", "c": "Attributes and hierarchies"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 337,
        "question": "What is the main characteristic of a star schema?",
        "answers": {"a": "Normalized dimensions", "b": "Central fact table surrounded by dimension tables", "c": "High level of data redundancy"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 338,
        "question": "What is a key advantage of a star schema?",
        "answers": {"a": "Fast query-response time", "b": "Minimal data redundancy", "c": "Complex design"},
        "correct": "a",
        "lecture":  3
    },
    {
        "id": 339,
        "question": "What is the snowflake schema characterized by?",
        "answers": {"a": "Denormalized dimensions", "b": "Centralized fact tables connected to multiple normalized dimensions", "c": "Simple design"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 340,
        "question": "What does the snowflake schema enhance due to its normalization methodology?",
        "answers": {"a": "Query performance", "b": "Disk space efficiency", "c": "Data redundancy"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 341,
        "question": "What is a multi-fact star model?",
        "answers": {"a": "A star schema with a single fact table", "b": "A dimensional model with multiple fact tables", "c": "A schema with denormalized dimensions"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 342,
        "question": "What are shared dimensions in a multi-fact star model referred to as?",
        "answers": {"a": "Primary dimensions", "b": "Conformed dimensions", "c": "Secondary dimensions"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 343,
        "question": "Which modeling approach is typically used for transactional systems?",
        "answers": {"a": "Dimensional modeling", "b": "ER modeling", "c": "Hierarchical modeling"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 344,
        "question": "What is the main job of transactional systems?",
        "answers": {"a": "Query performance", "b": "Transaction throughput", "c": "Data aggregation"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 345,
        "question": "What is a critical operation in BI systems?",
        "answers": {"a": "Real-time updates", "b": "Query performance", "c": "Transaction throughput"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 346,
        "question": "What do BI systems heavily depend on for performance?",
        "answers": {"a": "Minimal redundancy", "b": "Indexes and partitioning", "c": "Real-time updates"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 347,
        "question": "Which of the following best describes a dependent data mart?",
        "answers": {"a": "Created directly from the data warehouse", "b": "Created independently of the data warehouse", "c": "A type of ODS"},
        "correct": "a",
        "lecture":  3
    },
    {
        "id": 348,
        "question": "What type of data does an operational data store (ODS) typically consolidate?",
        "answers": {"a": "Historical data", "b": "Current, near–real-time data", "c": "Future predicted data"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 349,
        "question": "What is a key concept in dimensional modeling that determines the level of detail?",
        "answers": {"a": "Grain", "b": "Attribute", "c": "Fact"},
        "correct": "a",
        "lecture":  3
    },
    {
        "id": 350,
        "question": "What is a primary concern when working with data in fact tables?",
        "answers": {"a": "Maximizing redundancy", "b": "Minimizing and standardizing data", "c": "Increasing data complexity"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 351,
        "question": "Which schema type is designed to provide fast query-response time?",
        "answers": {"a": "Star schema", "b": "Snowflake schema", "c": "Hierarchical schema"},
        "correct": "a",
        "lecture":  3
    },
    {
        "id": 352,
        "question": "What do dimension tables in a star schema contain?",
        "answers": {"a": "Numeric measurements", "b": "Attributes that describe the data in the fact table", "c": "Foreign keys"},
        "correct": "b",
        "lecture":  3
    },
    {
        "id": 353,
        "question": "Which schema type typically requires fewer joins to query data?",
        "answers": {"a": "Star schema", "b": "Snowflake schema", "c": "Hierarchical schema"},
        "correct": "a",
        "lecture":  3
    },
    {
        "id": 354,
        "question": "What is a key advantage of using a multi-fact star model?",
        "answers": {"a": "Simplifies explanations with a single fact table", "b": "Accommodates multiple facts for enterprise data", "c": "Denormalizes data for simplicity"},
        "correct": "b",
        "lecture":  3
    },
    {
            "id": 355,
            "question": "What is ADWH (Analytical Data Warehousing Hybrid)?",
            "answers": {
                "a": "A technique for collecting and managing data from varied sources",
                "b": "A specific type of data warehouse",
                "c": "A software tool for data analysis",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 356,
            "question": "Who is credited with the quote about ADWH in the provided text?",
            "answers": {
                "a": "Bill Inmon",
                "b": "Ralph Kimball",
                "c": "Donald D. Chamberlin",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 357,
            "question": "What is the main purpose of data warehousing according to the text?",
            "answers": {
                "a": "Storing data for future use",
                "b": "Providing meaningful business insights",
                "c": "Developing software applications",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 358,
            "question": "What are the three main types of data warehouses mentioned in the text?",
            "answers": {
                "a": "Data silos, data lakes, data streams",
                "b": "Data marts, data lakes, operational data stores",
                "c": "Data marts, operational data stores, enterprise data warehouses",
                "d": "Data warehouses, data marts, data lakes"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 359,
            "question": "What distinguishes a data mart from a data warehouse?",
            "answers": {
                "a": "Size and focus",
                "b": "Location of data storage",
                "c": "Type of data analysis performed",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 360,
            "question": "What is a dependent data mart?",
            "answers": {
                "a": "A data mart relying on external sources",
                "b": "A data mart created directly from the data warehouse",
                "c": "A data mart with limited access",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 361,
            "question": "What advantage does a dependent data mart offer according to the text?",
            "answers": {
                "a": "Reduced cost",
                "b": "Consistent data model and quality data",
                "c": "Greater flexibility",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 362,
            "question": "What limits the use of data warehouses according to the text?",
            "answers": {
                "a": "Complexity of implementation",
                "b": "Limited storage capacity",
                "c": "High cost",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 363,
            "question": "What is an independent data mart?",
            "answers": {
                "a": "A data mart managed by an external party",
                "b": "A small warehouse designed for a strategic business unit or department",
                "c": "A data mart with no data model",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 364,
            "question": "What distinguishes an independent data mart from a dependent one?",
            "answers": {
                "a": "Size of the data",
                "b": "Source of the data",
                "c": "Level of access",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 365,
            "question": "What is the primary function of an Operational Data Store (ODS)?",
            "answers": {
                "a": "Storing long-term historical data",
                "b": "Providing integration of data from multiple sources",
                "c": "Supporting medium- and long-term decisions",
                "d": "Storing recent data for short-term decisions"
            },
            "correct": "d",
            "lecture":  3
        },
        {
            "id": 366,
            "question": "How does an ODS differ from a data warehouse in terms of data update frequency?",
            "answers": {
                "a": "ODS data is updated in real-time, while data warehouse data is static",
                "b": "ODS data is updated less frequently than data warehouse data",
                "c": "ODS data is never updated, while data warehouse data is updated regularly",
                "d": "Both ODS and data warehouse data are updated at the same frequency"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 367,
            "question": "What is the basis of an ODS according to the text?",
            "answers": {
                "a": "Operational data capture (ODC)",
                "b": "Change data capture (CDC)",
                "c": "Event data capture (EDC)",
                "d": "Real-time data capture (RTC)"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 368,
            "question": "What is the main purpose of an Enterprise Data Warehouse (EDW)?",
            "answers": {
                "a": "Storing recent data for short-term decisions",
                "b": "Supporting short-term operational decisions",
                "c": "Providing integration of data for enterprise-wide decision support",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 369,
            "question": "How does dimensional modeling differ from entity-relationship modeling?",
            "answers": {
                "a": "Dimensional modeling is used for business intelligence, while ER modeling is used for transaction processing",
                "b": "Dimensional modeling is better suited for business intelligence applications",
                "c": "Dimensional modeling organizes data by business processes, while ER modeling organizes data by entities and their relationships",
                "d": "All of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 370,
            "question": "What are the key concepts in dimensional modeling according to the text?",
            "answers": {
                "a": "Tables, columns, rows",
                "b": "Facts, dimensions, attributes",
                "c": "Keys, constraints, relationships",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 371,
            "question": "What is the purpose of a fact table in dimensional modeling?",
            "answers": {
                "a": "Storing primary keys of dimensional tables",
                "b": "Storing numeric measurements of business activities",
                "c": "Storing descriptive attributes",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 372,
            "question": "What is the grain in dimensional modeling?",
            "answers": {
                "a": "Level of detail in a measurement",
                "b": "Unit of measurement",
                "c": "Dimensional hierarchy",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 373,
            "question": "What type of relationships exist between fact tables and dimensions in dimensional modeling?",
            "answers": {
                "a": "One-to-one",
                "b": "Many-to-many",
                "c": "One-to-many",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 374,
            "question": "Where is the majority of data typically located in a dimensional model?",
            "answers": {
                "a": "Fact tables",
                "b": "Dimension tables",
                "c": "Relationship tables",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 375,
            "question": "What factors should be considered when choosing a schema for building a dimensional model?",
            "answers": {
                "a": "Complexity of analysis, analytical requirements, data consistency, BI tool compatibility",
                "b": "Size of data, type of data, frequency of data updates, database management system",
                "c": "Number of dimensions, number of facts, level of normalization, database indexing",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 376,
            "question": "What is the central feature of a star schema?",
            "answers": {
                "a": "Multiple fact tables",
                "b": "Single fact table surrounded by dimension tables",
                "c": "Hierarchical structure",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 377,
            "question": "What type of data does the fact table primarily contain in a star schema?",
            "answers": {
                "a": "Descriptive attributes",
                "b": "Performance measures, operational metrics, aggregated measures",
                "c": "Foreign keys",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 378,
            "question": "How are dimension tables related to the fact table in a star schema?",
            "answers": {
                "a": "Many-to-many relationship",
                "b": "One-to-one relationship",
                "c": "One-to-many relationship",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 379,
            "question": "What is a characteristic of the star schema in terms of data redundancy and table size?",
            "answers": {
                "a": "Minimal redundancy, small table size",
                "b": "Data redundancy, large table size",
                "c": "No redundancy, variable table size",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 380,
            "question": "What is one of the main purposes of using a star schema?",
            "answers": {
                "a": "Ensuring data integrity",
                "b": "Minimizing query effectiveness",
                "c": "Optimizing query performance",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 381,
            "question": "How are dimensions represented in a star schema?",
            "answers": {
                "a": "Each dimension is represented by multiple dimension tables",
                "b": "Each dimension is represented by a single dimension table",
                "c": "Dimensions are not represented in a star schema",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 382,
            "question": "How are dimension tables connected in a star schema?",
            "answers": {
                "a": "They are not connected",
                "b": "They are connected through foreign keys",
                "c": "They are connected through primary keys",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 383,
            "question": "What is a characteristic of data integrity in a star schema?",
            "answers": {
                "a": "It is strictly enforced due to normalized structure",
                "b": "It is not enforced due to denormalized structure",
                "c": "It depends on the type of BI tool used",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 384,
            "question": "What are the main characteristics of a star schema according to the text?",
            "answers": {
                "a": "Complexity, data redundancy, small table size",
                "b": "Simplicity, query effectiveness, data redundancy, large table size",
                "c": "Normalization, data integrity, large table size",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 385,
            "question": "How does the snowflake schema differ from the star schema in terms of dimensional representation?",
            "answers": {
                "a": "Dimensions are denormalized in the snowflake schema",
                "b": "Dimensions are normalized in the snowflake schema",
                "c": "Dimensions are represented by multiple tables in the snowflake schema",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 386,
            "question": "What does each level in the dimensional hierarchy become in a snowflake schema?",
            "answers": {
                "a": "A separate fact table",
                "b": "A denormalized table",
                "c": "Its own dimensional table",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 387,
            "question": "What characteristic distinguishes the snowflake schema in terms of disk space efficiency?",
            "answers": {
                "a": "Denormalization of dimension tables",
                "b": "Normalization of dimension tables",
                "c": "Data redundancy",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 388,
            "question": "How does the snowflake schema affect query performance compared to the star schema?",
            "answers": {
                "a": "Snowflake schema improves query performance",
                "b": "Snowflake schema decreases query performance",
                "c": "Snowflake schema has no impact on query performance",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 389,
            "question": "What is a characteristic of the snowflake schema compared to the star schema regarding table structure?",
            "answers": {
                "a": "Denormalized dimension tables",
                "b": "Normalized dimension tables",
                "c": "Single fact table",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 390,
            "question": "What type of schema is the snowflake schema considered to be?",
            "answers": {
                "a": "A simpler version of the star schema",
                "b": "An extension of the star schema",
                "c": "A replacement for the star schema",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 391,
            "question": "What is the primary advantage of the snowflake schema in terms of disk space usage?",
            "answers": {
                "a": "It utilizes more disk space compared to the star schema",
                "b": "It utilizes less disk space compared to the star schema",
                "c": "It has no impact on disk space usage compared to the star schema",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 392,
            "question": "What happens to the dimension tables in a snowflake schema compared to the star schema?",
            "answers": {
                "a": "They remain denormalized",
                "b": "They become more denormalized",
                "c": "They become normalized",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 393,
            "question": "What characteristic of the snowflake schema contributes to its complexity?",
            "answers": {
                "a": "Denormalization of dimension tables",
                "b": "Normalization of dimension tables",
                "c": "Single fact table",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 394,
            "question": "What is one potential drawback of the snowflake schema in terms of query performance?",
            "answers": {
                "a": "Improved query performance due to normalization",
                "b": "Decreased query performance due to normalization",
                "c": "No impact on query performance",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 395,
            "question": "What distinguishes multi-fact star models from traditional star models?",
            "answers": {
                "a": "They have multiple fact tables",
                "b": "They have normalized dimension tables",
                "c": "They have fewer dimensions",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 396,
            "question": "What are examples of facts mentioned in the text?",
            "answers": {
                "a": "Sales, expenses, inventory",
                "b": "Customers, stores, items",
                "c": "Dates, buyers, transactions",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 397,
            "question": "What are conformed dimensions?",
            "answers": {
                "a": "Dimensions that are shared across multiple fact tables",
                "b": "Dimensions that are unique to each fact table",
                "c": "Dimensions that are denormalized",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 398,
            "question": "In the provided example, what are the dimensions shared by both store sales and store inventory facts?",
            "answers": {
                "a": "Customer and store",
                "b": "Item, date, and buyer",
                "c": "Item, date, and customer",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 399,
            "question": "Which dimensions are not shared across the two facts in the example?",
            "answers": {
                "a": "Item, date, and buyer",
                "b": "Customer and store",
                "c": "Date and store",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 400,
            "question": "What is the relationship between the Tbl_Dim_Customer and Tbl_Fact_Store_Sales?",
            "answers": {
                "a": "Many-to-one",
                "b": "One-to-many",
                "c": "Many-to-many",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 401,
            "question": "How are the dimensions organized in the multi-fact star model?",
            "answers": {
                "a": "In a hierarchical structure",
                "b": "In a denormalized structure",
                "c": "In a normalized structure",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 402,
            "question": "What is the purpose of having multiple fact tables in a multi-fact star model?",
            "answers": {
                "a": "To simplify explanations",
                "b": "To complicate data analysis",
                "c": "To accommodate different business events",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 403,
            "question": "What is the benefit of using conformed dimensions in a multi-fact star model?",
            "answers": {
                "a": "It reduces the complexity of the model",
                "b": "It improves query performance",
                "c": "It allows for consistent analysis across different facts",
                "d": "None of the above"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 404,
            "question": "How does the structure of a multi-fact star model contribute to data analysis?",
            "answers": {
                "a": "It limits the types of analysis that can be performed",
                "b": "It enables analysis of multiple business events",
                "c": "It decreases query performance",
                "d": "None of the above"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 405,
            "question": "What is the primary focus of ER modeling (normalized modeling)?",
            "answers": {
                "a": "Query performance",
                "b": "Transaction throughput",
                "c": "Data aggregation",
                "d": "Real-time updates"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 406,
            "question": "Why is dimensional modeling considered best practice for BI and OLAP systems?",
            "answers": {
                "a": "Because it focuses on real-time updates",
                "b": "Because it minimizes data redundancy",
                "c": "Because it prioritizes transaction throughput",
                "d": "Because it focuses on query performance and data aggregation"
            },
            "correct": "d",
            "lecture":  3
        },
        {
            "id": 407,
            "question": "What distinguishes operational systems (OLTP) from BI and reporting systems?",
            "answers": {
                "a": "Operational systems focus on data aggregation",
                "b": "BI systems constantly update data",
                "c": "Operational systems handle transaction throughput",
                "d": "BI systems prioritize real-time updates"
            },
            "correct": "c",
            "lecture":  3
        },
        {
            "id": 408,
            "question": "How does the focus differ between operational systems and BI/reporting systems once data is loaded?",
            "answers": {
                "a": "Operational systems focus on query performance",
                "b": "BI/reporting systems focus on transaction throughput",
                "c": "Operational systems focus on data aggregation",
                "d": "BI/reporting systems focus on query performance and data aggregation"
            },
            "correct": "d",
            "lecture":  3
        },
        {
            "id": 409,
            "question": "What is a critical operation for BI and reporting systems?",
            "answers": {
                "a": "Real-time updates",
                "b": "Data aggregation",
                "c": "Transaction throughput",
                "d": "Data redundancy"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 410,
            "question": "How does the data storage differ between operational systems and BI/reporting systems?",
            "answers": {
                "a": "Operational systems have minimal redundancy, while BI systems have a lot of redundancy",
                "b": "BI systems have minimal redundancy, while operational systems have a lot of redundancy",
                "c": "Both operational systems and BI systems have minimal redundancy",
                "d": "Both operational systems and BI systems have a lot of redundancy"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 411,
            "question": "What does the BI system heavily depend on for storage efficiency?",
            "answers": {
                "a": "Redundancy",
                "b": "Indexes and partitioning",
                "c": "Real-time updates",
                "d": "Data aggregation"
            },
            "correct": "b",
            "lecture":  3
        },
        {
            "id": 412,
            "question": "What is the primary job of operational systems (OLTP)?",
            "answers": {
                "a": "Real-time updates",
                "b": "Data aggregation",
                "c": "Query performance",
                "d": "Transaction throughput"
            },
            "correct": "d",
            "lecture":  3
        },
        {
            "id": 413,
            "question": "What operation do BI and reporting systems primarily focus on after data is loaded?",
            "answers": {
                "a": "Real-time updates",
                "b": "Data aggregation",
                "c": "Transaction throughput",
                "d": "Query performance"
            },
            "correct": "d",
            "lecture":  3
        },
        {
            "id": 414,
            "question": "What is the difference in data handling frequency between operational systems and BI systems?",
            "answers": {
                "a": "Operational systems update data less frequently than BI systems",
                "b": "Operational systems update data more frequently than BI systems",
                "c": "Both operational systems and BI systems update data with the same frequency",
                "d": "None of the above"
            },
            "correct": "a",
            "lecture":  3
        },
        {
            "id": 415,
            "question": "What is the primary purpose of a data warehouse?",
            "answers": {
                "a": "To handle real-time transactions",
                "b": "To support decision making",
                "c": "To reduce data redundancy"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 416,
            "question": "Which characteristic is NOT a part of a data warehouse?",
            "answers": {
                "a": "Subject-oriented",
                "b": "Time-variant",
                "c": "Real-time transaction processing"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 417,
            "question": "What does OLAP stand for?",
            "answers": {
                "a": "Online Analytical Processing",
                "b": "Online Transaction Processing",
                "c": "Operational Analytical Processing"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 418,
            "question": "What is the main focus of OLTP systems?",
            "answers": {
                "a": "Data analysis",
                "b": "Running real-time reports",
                "c": "Automating daily business transactions"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 419,
            "question": "In which scenario is normalization typically used?",
            "answers": {
                "a": "OLTP systems",
                "b": "OLAP systems",
                "c": "Data warehousing"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 420,
            "question": "What is the goal of normalization?",
            "answers": {
                "a": "To increase data redundancy",
                "b": "To reduce data redundancy",
                "c": "To create complex queries"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 421,
            "question": "What does denormalization aim to improve?",
            "answers": {
                "a": "Query performance",
                "b": "Data integrity",
                "c": "Data redundancy"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 422,
            "question": "Which characteristic is NOT a feature of denormalization?",
            "answers": {
                "a": "Increased redundancy",
                "b": "Faster data retrieval",
                "c": "Enhanced data integrity"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 423,
            "question": "How does normalization affect the number of tables in a database?",
            "answers": {
                "a": "Increases the number of tables",
                "b": "Decreases the number of tables",
                "c": "Has no effect on the number of tables"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 424,
            "question": "What is a key benefit of using a data warehouse?",
            "answers": {
                "a": "Real-time transaction processing",
                "b": "Historical data analysis",
                "c": "Increased data redundancy"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 425,
            "question": "Which type of processing is typically associated with data warehouses?",
            "answers": {
                "a": "Online Transaction Processing (OLTP)",
                "b": "Batch Processing",
                "c": "Online Analytical Processing (OLAP)"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 426,
            "question": "What is the purpose of metadata in a data warehouse?",
            "answers": {
                "a": "To describe the structure and meaning of data",
                "b": "To store historical data",
                "c": "To process real-time transactions"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 427,
            "question": "What does ETL stand for in data warehousing?",
            "answers": {
                "a": "Extract, Transform, Load",
                "b": "Extract, Transfer, Load",
                "c": "Extract, Translate, Load"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 428,
            "question": "Which component is NOT typically part of a data warehouse architecture?",
            "answers": {
                "a": "Data sources",
                "b": "Data staging area",
                "c": "Transaction processing system"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 429,
            "question": "What is the main function of middleware tools in a data warehouse?",
            "answers": {
                "a": "To manage transaction processing",
                "b": "To enable access to the data warehouse",
                "c": "To store historical data"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 430,
            "question": "What does the term 'subject-oriented' mean in the context of a data warehouse?",
            "answers": {
                "a": "Data is organized by subjects relevant for decision support",
                "b": "Data is organized by real-time transactions",
                "c": "Data is organized by random subjects"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 431,
            "question": "What is one of the main differences between a data warehouse and an operational database?",
            "answers": {
                "a": "A data warehouse is designed for transaction processing",
                "b": "An operational database is designed for decision support",
                "c": "A data warehouse is designed for analytical processing"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 432,
            "question": "What type of data does a data warehouse typically store?",
            "answers": {
                "a": "Current operational data",
                "b": "Historical and current data",
                "c": "Temporary data"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 433,
            "question": "What is the main goal of data warehousing?",
            "answers": {
                "a": "To automate daily transactions",
                "b": "To provide decision support",
                "c": "To reduce data redundancy"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 434,
            "question": "Which system is designed for ad hoc analysis of organizational data?",
            "answers": {
                "a": "OLTP",
                "b": "OLAP",
                "c": "ERP"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 435,
            "question": "Which type of data is NOT typically found in a data warehouse?",
            "answers": {
                "a": "Historical data",
                "b": "Real-time transaction data",
                "c": "Analytical data"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 436,
            "question": "Which characteristic of a data warehouse ensures that data remains unchanged once entered?",
            "answers": {
                "a": "Nonvolatile",
                "b": "Time-variant",
                "c": "Integrated"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 437,
            "question": "What is a key benefit of using a data warehouse for decision making?",
            "answers": {
                "a": "Real-time data updates",
                "b": "Comprehensive view of organizational data",
                "c": "Reduced data redundancy"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 438,
            "question": "What role does metadata play in a data warehouse?",
            "answers": {
                "a": "It describes the data structure and organization",
                "b": "It stores transactional data",
                "c": "It processes data queries"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 439,
            "question": "Which component of a data warehouse involves data cleaning and transformation?",
            "answers": {
                "a": "Data extraction",
                "b": "Data staging area",
                "c": "Data loading"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 440,
            "question": "What is the function of the ETL process in a data warehouse?",
            "answers": {
                "a": "Extract, Transform, Load data",
                "b": "Evaluate, Test, Log data",
                "c": "Enter, Transfer, Locate data"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 441,
            "question": "What does the term 'integrated' imply in the context of a data warehouse?",
            "answers": {
                "a": "Data from different sources is in a consistent format",
                "b": "Data is updated in real-time",
                "c": "Data is stored in a single table"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 442,
            "question": "Why is data in a data warehouse described as time-variant?",
            "answers": {
                "a": "It includes time-stamped historical data",
                "b": "It is updated in real-time",
                "c": "It is periodically deleted"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 443,
            "question": "What is the benefit of maintaining historical data in a data warehouse?",
            "answers": {
                "a": "Supports trend analysis and forecasting",
                "b": "Reduces storage costs",
                "c": "Ensures data integrity"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 444,
            "question": "Which type of processing is primarily responsible for capturing and storing data related to day-to-day business functions?",
            "answers": {
                "a": "Analytic Processing",
                "b": "Online Transaction Processing (OLTP)",
                "c": "Data Mining"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 445,
            "question": "What is the purpose of a data warehouse?",
            "answers": {
                "a": "To handle updates to operational databases",
                "b": "To automate daily business transactions",
                "c": "To provide storage for data used for analysis"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 446,
            "question": "Which process involves arranging data in the database efficiently and removing redundancy and inconsistent dependency?",
            "answers": {
                "a": "Normalization",
                "b": "Denormalization",
                "c": "Data Mining"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 447,
            "question": "What is the key difference between normalization and denormalization?",
            "answers": {
                "a": "Normalization reduces data redundancy, while denormalization increases it.",
                "b": "Normalization makes data retrieval faster, while denormalization makes it slower.",
                "c": "Normalization is used in OLAP systems, while denormalization is used in OLTP systems."
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 448,
            "question": "Which characteristic of a data warehouse ensures that data are organized by detailed subjects relevant for decision support?",
            "answers": {
                "a": "Subject-oriented",
                "b": "Integrated",
                "c": "Time-variant"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 449,
            "question": "What is the purpose of metadata in a data warehouse?",
            "answers": {
                "a": "To eliminate data redundancy",
                "b": "To improve data retrieval speed",
                "c": "To describe the structure and meaning of data"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 450,
            "question": "What is the process of creating applications that provide decision support capability and create business insight?",
            "answers": {
                "a": "Data extraction",
                "b": "Data transformation",
                "c": "Data warehousing"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 451,
            "question": "Where do data in a data warehouse come from?",
            "answers": {
                "a": "External data providers only",
                "b": "Operational databases only",
                "c": "Multiple independent sources"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 452,
            "question": "Which component of a data warehouse enables access to the data for users?",
            "answers": {
                "a": "Data sources",
                "b": "Data loading",
                "c": "Middleware tools"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 453,
            "question": "What is the primary purpose of Online Analytical Processing (OLAP) systems?",
            "answers": {
                "a": "To automate daily business transactions",
                "b": "To handle updates to operational databases",
                "c": "To provide ad hoc analysis of organizational data"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 454,
            "question": "Which type of processing is designed to address ad hoc analysis and complex queries more effectively and efficiently?",
            "answers": {
                "a": "Analytic Processing",
                "b": "Online Transaction Processing (OLTP)",
                "c": "Online Analytical Processing (OLAP)"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 455,
            "question": "What is the purpose of denormalization in a database?",
            "answers": {
                "a": "To improve data retrieval speed",
                "b": "To eliminate data redundancy",
                "c": "To increase data consistency"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 456,
            "question": "Which type of data is typically stored in a data warehouse?",
            "answers": {
                "a": "Operational data",
                "b": "Real-time data",
                "c": "Analytical data"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 457,
            "question": "Which characteristic of a data warehouse ensures that data are integrated from different sources into a consistent format?",
            "answers": {
                "a": "Subject-oriented",
                "b": "Integrated",
                "c": "Time-variant"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 458,
            "question": "What is the purpose of data extraction and transformation in the data warehousing process?",
            "answers": {
                "a": "To eliminate data redundancy",
                "b": "To automate daily business transactions",
                "c": "To convert data into a consistent format"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 459,
            "question": "Which type of metadata describes the meaning of the data in a specific domain?",
            "answers": {
                "a": "Syntactic metadata",
                "b": "Structural metadata",
                "c": "Semantic metadata"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 460,
            "question": "What does OLTP stand for?",
            "answers": {
                "a": "Online Transaction Processing",
                "b": "Online Analytical Processing",
                "c": "Operational Legacy Processing"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 461,
            "question": "Which process involves combining normalized data into a schema that contains redundant information?",
            "answers": {
                "a": "Normalization",
                "b": "Denormalization",
                "c": "Data Mining"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 462,
            "question": "What is the purpose of OLAP in a data warehouse environment?",
            "answers": {
                "a": "To automate daily business transactions",
                "b": "To handle updates to operational databases",
                "c": "To provide ad hoc analysis and reporting"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 463,
            "question": "Which characteristic of a data warehouse ensures that historical data is maintained?",
            "answers": {
                "a": "Subject-oriented",
                "b": "Integrated",
                "c": "Time-variant"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 464,
            "question": "What happens to data in a data warehouse after it is entered?",
            "answers": {
                "a": "It can be modified or updated.",
                "b": "It is discarded and replaced with new data.",
                "c": "It is stored as snapshots for historical record keeping."
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 465,
            "question": "Which characteristic of a data warehouse ensures that data are organized by detailed subjects, such as sales or products?",
            "answers": {
                "a": "Subject-oriented",
                "b": "Integrated",
                "c": "Time-variant"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 466,
            "question": "What is the purpose of data mining in a data warehouse environment?",
            "answers": {
                "a": "To automate daily business transactions",
                "b": "To handle updates to operational databases",
                "c": "To extract valuable patterns and insights from data"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 467,
            "question": "Which process involves arranging data in the database to reduce redundancy and achieve data integrity?",
            "answers": {
                "a": "Normalization",
                "b": "Denormalization",
                "c": "Data Mining"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 468,
            "question": "Which type of processing is designed to handle routine ongoing business functions?",
            "answers": {
                "a": "Analytic Processing",
                "b": "Online Transaction Processing (OLTP)",
                "c": "Data Mining"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 469,
            "question": "What is the primary purpose of a data warehouse?",
            "answers": {
                "a": "To handle updates to operational databases",
                "b": "To automate daily business transactions",
                "c": "To provide storage for data used for analysis"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 470,
            "question": "Which process involves combining normalized data into a schema that contains redundant information?",
            "answers": {
                "a": "Normalization",
                "b": "Denormalization",
                "c": "Data Mining"
            },
            "correct": "b",
            "lecture":  2
        },
        {
            "id": 471,
            "question": "What is the key difference between normalization and denormalization?",
            "answers": {
                "a": "Normalization reduces data redundancy, while denormalization increases it.",
                "b": "Normalization makes data retrieval faster, while denormalization makes it slower.",
                "c": "Normalization is used in OLTP systems, while denormalization is used in OLAP systems."
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 472,
            "question": "Which characteristic of a data warehouse ensures that data are organized by detailed subjects relevant for decision support?",
            "answers": {
                "a": "Subject-oriented",
                "b": "Integrated",
                "c": "Time-variant"
            },
            "correct": "a",
            "lecture":  2
        },
        {
            "id": 473,
            "question": "What is the purpose of metadata in a data warehouse?",
            "answers": {
                "a": "To eliminate data redundancy",
                "b": "To improve data retrieval speed",
                "c": "To describe the structure and meaning of data"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 474,
            "question": "What is the process of creating applications that provide decision support capability and create business insight?",
            "answers": {
                "a": "Data extraction",
                "b": "Data transformation",
                "c": "Data warehousing"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 475,
            "question": "Where do data in a data warehouse come from?",
            "answers": {
                "a": "External data providers only",
                "b": "Operational databases only",
                "c": "Multiple independent sources"
            },
            "correct": "c",
            "lecture":  2
        },
        {
            "id": 476,
            "question": "Which component of a data warehouse enables access to the data for users?",
            "answers": {
                "a": "Data sources",
                "b": "Data loading",
                "c": "Middleware tools"
            },
            "correct": "c",
            "lecture":  2
        },
        
        
        {
            "id": 480,
            "question": "Who is the instructor for the course?",
            "answers": {
                "a": "Dr. Wael Abbas",
                "b": "Dr. Ahmed Ali",
                "c": "Dr. Sara Hassan"
            },
            "correct": "a",
            "lecture":  1
        },
        
        {
            "id": 482,
            "question": "What is the primary textbook for the course?",
            "answers": {
                "a": "Building the Data Warehouse by W. H. Inmon",
                "b": "The Data Warehouse Toolkit by Ralph Kimball",
                "c": "Data Warehousing for Dummies by Thomas C. Hammergren"
            },
            "correct": "a",
            "lecture":  1
        },
        
        
        {
            "id": 486,
            "question": "Which technology is associated with low-cost data storage in data lakes?",
            "answers": {
                "a": "Hadoop",
                "b": "Oracle",
                "c": "SQL Server"
            },
            "correct": "a",
            "lecture":  1
        },
        {
            "id": 487,
            "question": "What is the difference between a data warehouse and a data lake?",
            "answers": {
                "a": "Data warehouses store unstructured data, while data lakes store structured data",
                "b": "Data lakes store all types of data in its raw format, while data warehouses store structured data",
                "c": "Data warehouses are used for real-time processing, while data lakes are used for batch processing"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 488,
            "question": "What is the term used to describe the process of loading raw data into a data lake and giving it structure later?",
            "answers": {
                "a": "Schema-on-write",
                "b": "Schema-on-read",
                "c": "Schema-on-load"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 489,
            "question": "Which feature of Big Data technologies contributes to their low storage cost?",
            "answers": {
                "a": "High licensing fees",
                "b": "Open source software and low-cost hardware",
                "c": "Proprietary software"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 490,
            "question": "What is the term for the ability to easily configure and reconfigure models, queries, and apps in a data lake?",
            "answers": {
                "a": "Flexibility",
                "b": "Agility",
                "c": "Scalability"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 491,
            "question": "What is the primary reason for performing denormalization?",
            "answers": {
                "a": "To improve query performance",
                "b": "To reduce data redundancy",
                "c": "To maintain data integrity"
            },
            "correct": "a",
            "lecture":  1
        },
        {
            "id": 492,
            "question": "What is a data lake?",
            "answers": {
                "a": "A structured data storage system",
                "b": "A large storage location that holds vast quantities of data in its raw format",
                "c": "A real-time data processing system"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 493,
            "question": "Which component is responsible for transforming and cleansing data before it is loaded into a data warehouse?",
            "answers": {
                "a": "Data extraction",
                "b": "Data loading",
                "c": "Data transformation"
            },
            "correct": "c",
            "lecture":  1
        },
        {
            "id": 494,
            "question": "What type of data does a data warehouse store?",
            "answers": {
                "a": "Only unstructured data",
                "b": "Only semi-structured data",
                "c": "Structured data"
            },
            "correct": "c",
            "lecture":  1
        },
        {
            "id": 495,
            "question": "What type of data does a data lake store?",
            "answers": {
                "a": "Only structured data",
                "b": "All kinds of data in its native/raw format",
                "c": "Only processed data"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 496,
            "question": "What is schema-on-write?",
            "answers": {
                "a": "Modeling data before loading into the warehouse",
                "b": "Loading raw data and modeling it later",
                "c": "Writing schema only for structured data"
            },
            "correct": "a",
            "lecture":  1
        },
        {
            "id": 497,
            "question": "Which week covers the topic 'Introduction to Business Intelligence' in the course syllabus?",
            "answers": {
                "a": "Week 8",
                "b": "Week 10",
                "c": "Week 11"
            },
            "correct": "c",
            "lecture":  1
        },
        {
            "id": 498,
            "question": "What is the term used for the process of organizing data to reduce redundancy?",
            "answers": {
                "a": "Normalization",
                "b": "Denormalization",
                "c": "Data mining"
            },
            "correct": "a",
            "lecture":  1
        },
        {
            "id": 499,
            "question": "What is one of the key reasons for the increased cost of storing data in data warehouses?",
            "answers": {
                "a": "Use of proprietary software",
                "b": "Low-cost commodity hardware",
                "c": "Open source licensing"
            },
            "correct": "a",
            "lecture":  1
        },
        {
            "id": 500,
            "question": "What is one advantage of using a data lake over a data warehouse?",
            "answers": {
                "a": "Structured data storage",
                "b": "Higher data retrieval speed",
                "c": "Low-cost data storage"
            },
            "correct": "c",
            "lecture":  1
        },
        {
            "id": 501,
            "question": "What is the primary focus of a data warehouse?",
            "answers": {
                "a": "Real-time data processing",
                "b": "Analytical processing and decision support",
                "c": "Transactional data processing"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 502,
            "question": "What is the main difference between data warehousing and data lakes?",
            "answers": {
                "a": "Data warehousing is for unstructured data, and data lakes are for structured data",
                "b": "Data warehousing is for structured data, and data lakes are for all types of data",
                "c": "Data warehousing is for real-time processing, and data lakes are for batch processing"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 503,
            "question": "What is the benefit of using schema-on-read in a data lake?",
            "answers": {
                "a": "Increased data redundancy",
                "b": "Improved query performance",
                "c": "Flexibility to structure data as needed"
            },
            "correct": "c",
            "lecture":  1
        },
        {
            "id": 504,
            "question": "Which concept involves giving data structure only when it is read for analysis?",
            "answers": {
                "a": "Schema-on-write",
                "b": "Schema-on-read",
                "c": "Schema-on-load"
            },
            "correct": "b",
            "lecture":  1
        },
        {
            "id": 505,
            "question": "What is a primary benefit of a data lake's lack of structure?",
            "answers": {
                "a": "Easier data retrieval",
                "b": "Greater storage cost",
                "c": "Enhanced flexibility for developers and data scientists"
            },
            "correct": "c",
            "lecture":  1
        }
    
    

    
];


function Landing() {
    const [selectedLecture, setSelectedLecture] = useState(7);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isCorrect, setIsCorrect] = useState({});

    const audioRef = useRef(null); // Create a ref for the audio element


    useEffect(() => {
        // Filter questions based on selected lecture
        const filtered = questionsData.filter(q => q.lecture === selectedLecture);
        setFilteredQuestions(filtered);
        setSelectedAnswers({});
        setIsCorrect({});
    }, [selectedLecture]);

    const handleLectureChange = (e) => {
        setSelectedLecture(parseInt(e.target.value));
    };

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
        const question = filteredQuestions.find(q => q.id === questionId);
        if (question && answer === question.correct) {
            setIsCorrect(prev => ({ ...prev, [questionId]: true }));
        } else {
            setIsCorrect(prev => ({ ...prev, [questionId]: false }));
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setTimeout(() => {
                audioRef.current.pause();
            }, 1000); // Pause the sound after 1 second
        }
    };

    return (
        <>
            <div className='made-by'>
                Made By <a target='_blank' href="https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/"> Abdelrhman Elsawy </a>
            </div>

                    <audio className='hide' ref={audioRef} src={correctSound} /> {/* Add the audio element */}

            <section className='landing'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-l2'>
                            <h1>Data Warehouse</h1>
                        </div>
                        <div className='col-l2'>
                            <div className='options'>
                                <select id="ChooseLec" onChange={handleLectureChange} value={selectedLecture}>
                                    <option value='1'>Lecture 1</option>
                                    <option value='2'>Lecture 2</option>
                                    <option value='3'>Lecture 3</option>
                                    <option value='4'>Lecture 4</option>
                                    <option value='5'>Lecture 5</option>
                                    <option value='6'>Lecture 6</option>
                                    <option value='7'>Lecture 7</option>
                                    <option value='8'>Lecture 8</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
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
                                        {isCorrect[question.id] === false && <h2 className='wrong-answer'>Wrong Answer .... Try Again</h2>}
                                        {isCorrect[question.id] === true && <h2 className='right-answer'>Correct</h2>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landing;