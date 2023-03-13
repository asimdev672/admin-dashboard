import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import HelpModal from "./HelpModal";
import { BiHelpCircle } from "react-icons/bi";

export default function CompA8() {
  const A8 = [
    {
      srNo: 8.1,
      controller: "User end point devices",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Physical_security",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.2,
      controller: "Privileged access rights",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Identity_and_access_management",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.3,
      controller: "Information access restriction",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Identity_and_access_management",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.4,
      controller: "Access to source code",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Identity_and_access_management",
          },
          { point_a: "#Application_security" },
          { point_a: "#Secure_configuration" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.5,
      controller: "Secure authentication",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Identity_and_access_management",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.6,
      controller: "Capacity management",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Protect" },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#Continuity",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 8.7,
      controller: "Protection against malware",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
          { point_a: "#Corrective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
          { point_a: "#Information_protection" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 8.8,
      controller: "Management of technical vulnerabilities",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Protect" },
        ],
        td_d: [
          {
            point_a: "#Threat_and_vulnerability_management",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
          { point_a: "#Protection" },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 8.9,
      controller: "Configuration management",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Secure_configuration",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.1,
      controller: "Information deletion",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Information_protection",
          },
          { oint_a: "#Legal_and_compliance" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.11,
      controller: "Data masking",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Information_protection",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.12,
      controller: "Data leakage prevention",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#Information_protection",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 8.13,
      controller: "Information backup",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Corrective",
          },
        ],
        td_b: [
          {
            point_a: "#Integrity",
          },
          { point_a: "#Availability" },
        ],
        td_c: [
          {
            point_a: "#Recover",
          },
        ],
        td_d: [
          {
            point_a: "#Continuity",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.14,
      controller: "Redundancy of information processing facilities",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#Availability",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Continuity",
          },
          { point_a: "#Asset_management" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
          { point_a: "#Resilience" },
        ],
      },
    },
    {
      srNo: 8.15,
      controller: "Logging",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Detective",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Detect",
          },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 8.16,
      controller: "Monitoring activities",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Corrective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Detect",
          },
          { point_a: "#Respond" },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management",
          },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
        ],
      },
    },

    {
      srNo: 8.17,
      controller: "Clock synchronization",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Detective",
          },
        ],
        td_b: [
          {
            point_a: "#Integrity",
          },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 8.18,
      controller: "Use of privileged utility programs",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
          { point_a: "#Secure_configuration" },
          { point_a: "#Application_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.19,
      controller: "Installation of software on operational systems",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Secure_configuration",
          },
          { point_a: "#Application_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.2,
      controller: "Networks security",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.21,
      controller: "Security of network services",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.22,
      controller: "Segregation of networks",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: {
          td_b: [
            {
              point_a: "#confidentiality",
            },
            { ponit_a: "#Integrity" },
            { ponit_a: "#Availibilty" },
          ],
          td_c: [
            {
              point_a: "#Protect",
            },
          ],
          td_d: [
            {
              point_a: "#System_and_network_security",
            },
          ],
          td_e: [
            {
              point_a: "#Protection",
            },
          ],
        },
      },
    },
    {
      srNo: 8.23,
      controller: "Web filtering",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.24,
      controller: "Use of cryptography",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Secure_configuration",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.25,
      controller: "Secure development life cycle",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.26,
      controller: " Application security requirements",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 8.27,
      controller: "Secure system architecture and engineering principles",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.28,
      controller: "Secure coding",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.29,
      controller: "Security testing in development and acceptance",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#Information_security_assurance" },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.3,
      controller: "Outsourced development",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
          { point_a: "#Detective" },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Protect" },
          { point_a: "#Detect" },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
          { point_a: "#Application_security" },
          { point_a: "#Supplier_relationships_security" },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 8.31,
      controller: "Separation of development, test and production environments",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.32,
      controller: "Change management",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Application_security",
          },
          { point_a: "#System_and_network_security" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.33,
      controller: "Test information",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Information_protection",
          },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 8.34,
      controller: " Protection of information systems during audit testing",
      condition: " ",
      description: " ",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Preventive",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { ponit_a: "#Integrity" },
          { ponit_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#System_and_network_security",
          },
          { point_a: "#Information_protection" },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
          { point_a: "#Protection" },
        ],
      },
    },
  ];

  const [controlerA8, setControlerA8] = useState(A8);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);
  const [data, setdata] = useState({});

  const handleClose = () => setModalShow(false);
  const handleShow = (el) => {
    setModalShow(true);
    setdata(el);
  };

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA8];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA8(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA8];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA8(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA8];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA8(newArr);
  };
  // handleSubmit
  const handleSubmit = (el, index) => {
    console.log("inputData 5", el);
    const newFormData = new FormData();
    newFormData.append("srNo", el.srNo);
    newFormData.append("condition", el.condition);
    newFormData.append("description", el.description);
    newFormData.append("controller", el.controller);
    el?.files?.map((el) => newFormData.append("files", el));
    console.log("newFormData", newFormData);
    axios
      .post("http://localhost:8000/api/v1/iso", newFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("res", res);
        let copArr = [...controlerA8];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = "";
        obj.description = "";
        obj.files = [];
        copArr[index] = obj;
        setControlerA8(copArr);
        toast.success("Successfully Added");

        console.log(
          "res",
          ` http://localhost:8000/api/v1/iso/${res.data.data.files}`
        );
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Something went wrong");
      });
  };
  return (
    <>
      <div className="container-lg container-fluid anexA">
        {/* ***************Begin::Controller For A8****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            8 Context of the organisation
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>
              {controlerA8.map((el, index) => (
                <table key={index}>
                  <tr className={`${el.color ? "green" : ""}`}>
                    {/************Begin:: Sr No :***********  */}
                    <td>
                      <p style={{ width: "1rem" }}>{el.srNo}</p>
                    </td>
                    {/************End:: Sr No :***********  */}

                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <p className="overflow-hidden" style={{ width: "16rem" }}>
                        {el.controller}
                      </p>
                    </td>
                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <select
                        value={controlerA8[index].condition}
                        name="condition"
                        onChange={(e) => handleInputForm(e.target.value, index)}
                      >
                        <option value="Unknown">unknown</option>
                        <option value="Non-existent">Non-existent</option>
                        <option value="Initial">Initial</option>
                        <option value="Limited">Limited</option>
                        <option value="Defined">Defined</option>
                        <option value="Managed">Managed</option>
                        <option value="Optimized">Optimized</option>
                        <option value="Not-applicable">Not applicable</option>
                      </select>
                    </td>
                    <td>
                      <textarea
                        className="mt-3"
                        style={{ height: "40px", width: "17rem" }}
                        value={controlerA8[index].description}
                        name="description"
                        form="usrform"
                        onChange={(e) =>
                          handleInputFormDes(e.target.value, index)
                        }
                      ></textarea>
                    </td>
                    <td>
                      <span className="position-relative d-block">
                        <span className="ico">
                          {controlerA8[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA8${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA8${index}`}
                            onChange={(e) => handleFile(e, index)}
                            multiple
                            //  accept='.png, .jpg, .jpeg'
                          />
                        </label>
                      </div>
                    </td>
                    <td>
                      <button
                        className="submitBtn"
                        onClick={() => handleSubmit(el, index)}
                      >
                        Submit
                      </button>
                    </td>
                    <td>
                      <span onClick={() => handleShow(el?.help_data)}>
                        <BiHelpCircle title="help" className="ico2" />
                      </span>
                    </td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A8********************** */}
      </div>
      {/******************* Help Modal ************************** */}
      <Modal show={modalShow} size="lg" onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body>
          <HelpModal data={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}
