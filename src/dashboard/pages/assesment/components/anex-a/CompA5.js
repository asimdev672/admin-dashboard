import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import HelpModal from "./HelpModal";
import { BiHelpCircle } from "react-icons/bi";
export default function CompA5() {
  const A5 = [
    {
      srNo: 5.1,
      controller: "Policies for information security",
      condition: "",
      description: "",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Prevention",
          },
        ],
        td_b: [
          {point_a: "#confidentiality"},
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
        ],
        td_e: [
          {
            point_a: "Governance_and_Ecosystem",
          },
          { point_a: "#Resilience" },
        ],
      },
    },
    {
      srNo: 5.2,
      controller: "Information security roles and responsibilities",
      condition: "",
      description: "",
      files: [],
      color: false,
      help_data: {
        td_a:[{
          point_a: "#Prevention",
        }],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
        ],
        td_e: [
          {
            point_a: "Governance_and_Ecosystem",
          },
          { point_a: "#Resilience" },
        ],
      },
    },
    {
      srNo: 5.3,
      controller: "Segregation of duties",
      condition: "",
      description: "",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Prevention",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
          { point_a: "#Identity_and_access_management" },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 5.4,
      controller: "Management responsibilities",
      condition: "",
      description: "",
      files: [],
      color: false,
      help_data: {
        td_a: [
          {
            point_a: "#Prevention",
          },
        ],
        td_b: [
          {
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
        ],
        td_e: [
          {
            point_a: "# Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 5.5,
      controller: "Contact with authorities",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Protect" },
          { point_a: "#Respond" },
          { point_d: "#Recover" },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
          { point_a: "#Resilience " },
        ],
      },
    },
    {
      srNo: 5.6,
      controller: "Contact with special interest groups",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Respond" },
          { point_a: "#Recover" },
        ],
        td_d: [
          {
            point_a: "#Governance",
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
      srNo: 5.7,
      controller: "Threat intelligence",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Detect" },
          { point_a: "#Respond " },
        ],
        td_d: [
          {
            point_a: "#Threat_and_vulnerability_management",
          },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
          { point_a: "#Resilience" },
        ],
      },
    },
    {
      srNo: 5.8,
      controller: "Information security in project management",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Protect" },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem ",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 5.9,
      controller: "Inventory of information and other associated assets",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Asset_management",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem ",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 5.1,
      controller: "Acceptable use of information and other associated assets",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Asset Management",
          },
          { point_a: "#Information_protection" },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem ",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 5.11,
      controller: "Return of assets",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Asset Management",
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
      srNo: 5.12,
      controller: "Classification of information",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Information_protection",
          },
        ],
        td_e: [
          {
            point_a: "# Protection",
          },
          { point_a: "#Defence" },
        ],
      },
    },
    {
      srNo: 5.13,
      controller: "Labelling of information",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Information_protection",
          },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
          { point_a: "#Protection " },
        ],
      },
    },
    {
      srNo: 5.14,
      controller: "Information transfer",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Asset Management",
          },
          { point_a: "#Information_Protection " },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 5.15,
      controller: "Access control",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
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
      srNo: 5.16,
      controller: "Identity management",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
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
      srNo: 5.17,
      controller: "Authentication information",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
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
      srNo: 5.18,
      controller: "Access rights",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
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
      srNo: 5.19,
      controller: "Information security in supplier relationships",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
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
      srNo: 5.2,
      controller: "Addressing information security within supplier agreements",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Supplier_relationships_security",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_ Ecosystem",
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 5.21,
      controller: "Managing information security in the ICT supply chain",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Supplier_relationships_security",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_ Ecosystem",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 5.22,
      controller:
        "Monitoring, review and change management of supplier services",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Supplier_relationships_security",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_ Ecosystem",
          },
          { point_a: "#Protection" },
          { point_a: "#Defence" },
          { point_a: "#Information_security_assurance" },
        ],
      },
    },

    {
      srNo: 5.23,
      controller: "Information security for use of cloud services",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
        ],
        td_d: [
          {
            point_a: "#Supplier_relationships_security",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_ Ecosystem",
          },
          { point_a: "#Protection" },
        ],
      },
    },
    {
      srNo: 5.24,
      controller:
        "Information security incident management planning and preparation",
      condition: "",
      description: "",
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
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Respond ",
          },
          { point_a: "#Recover " },
        ],
        td_d: [
          {
            point_a: "#Governance",
          },
          { point_a: "#Information_security_event_management " },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
        ],
      },
    },
    {
      srNo: 5.25,
      controller: "Assessment and decision on information security events",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Detect",
          },
          { point_a: "#Respond" },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management ",
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
      srNo: 5.26,
      controller: "Response to information security incidents",
      condition: "",
      description: "",
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
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Respond",
          },
          { point_a: "#Recover" },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management ",
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
      srNo: 5.27,
      controller: "Learning from information security incidents",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "#Protect" },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management ",
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
      srNo: 5.28,
      controller: "Collection of evidence",
      condition: "",
      description: "",
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
            point_a: "#confidentiality",
          },
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Detect",
          },
          { point_a: "#Respond" },
        ],
        td_d: [
          {
            point_a: "#Information_security_event_management ",
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
      srNo: 5.29,
      controller: "Information security during disruption",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Respond" },
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
          { point_a: "#Resilience" },
        ],
      },
    },
    {
      srNo: 5.3,
      controller: "ICT readiness for business continuity",
      condition: "",
      description: "",
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
            point_a: "#Availibilty",
          },
        ],
        td_c: [
          {
            point_a: "#Respond",
          },
        ],
        td_d: [
          {
            point_a: "#Continuity",
          },
        ],
        td_e: [
          {
            point_a: "#Resilience",
          },
        ],
      },
    },
    {
      srNo: 5.31,
      controller: "Legal, statutory, regulatory and contractual requirements",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Legal_and_compliance",
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
      srNo: 5.32,
      controller: "Intellectual property rights",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
        ],
        td_d: [
          {
            point_a: "#Legal_and_compliance",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 5.33,
      controller: "Protection of records",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "Protect" },
        ],
        td_d: [
          {
            point_a: "#Legal_and_compliance",
          },
          { point_a: "#Asset_management" },
          { point_a: "#nformation_protection" },
        ],
        td_e: [
          {
            point_a: "#Defence",
          },
        ],
      },
    },
    {
      srNo: 5.34,
      controller: "Privacy and protection of PII",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "Protect" },
        ],
        td_d: [
          {
            point_a: "#nformation_protection",
          },
          { point_a: "#Legal_and_compliance" },
        ],
        td_e: [
          {
            point_a: "#Protection",
          },
        ],
      },
    },
    {
      srNo: 5.35,
      controller: "Independent review of information security",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "Protect" },
        ],
        td_d: [
          {
            point_a: "#Information_security_assurance",
          },
        ],
        td_e: [
          {
            point_a: "#Governance_and_Ecosystem",
          },
        ],
      },
    },
    {
      srNo: 5.36,
      controller:
        "Compliance with policies, rules and standards for information security",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Identify",
          },
          { point_a: "Protect" },
        ],
        td_d: [
          {
            point_a: "#Legal_and_compliance",
          },
          { point_a: "#Information_security_assurance" },
        ],
        td_e: {},
      },
    },
    {
      srNo: 5.37,
      controller: "Documented operating procedures",
      condition: "",
      description: "",
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
          { point_a: "#Integrity" },
          { point_a: "#Availibilty" },
        ],
        td_c: [
          {
            point_a: "#Protect",
          },
          { point_a: "#Recover" },
        ],
        td_d: [
          {
            point_a: "#Asset_management",
          },
          { point_a: "#Physical_security" },
          { point_a: "#System_and_network_security" },
          { point_a: "#Application_security" },
          { point_a: "#Secure_configuration" },
          { point_a: "#Identity_and_access_management" },
          { point_a: "#Treat_and_vulnerability_management" },
          { point_a: "#Continuity" },
          { point_a: "#Information_security_event_management" },
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
  ];

  const cc = {
    srNo: 5.1,
    controller: "Policies for \\n information security",
  };
  const b = cc.controller.replace("\\n", `</br>`);
  // document.getElementById("data").innerHTML = `Controller: ${b}`;

  const [controlerA5, setControlerA5] = useState(A5);
  console.log("controlerA5", controlerA5);
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
    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  // handleSubmit
  const handleSubmit = (el, index) => {
    console.log("inputData 5", el);
    const updatedData = {
      condition: el.condition,
      description: el.description,
    };
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
        let copArr = [...controlerA5];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = "";
        obj.description = "";
        obj.files = [];
        copArr[index] = obj;
        setControlerA5(copArr);
        toast.success("Successfully Added");
        axios.patch(
          `http://localhost:8000/api/v1/control/updateControl/${el.srNo}`,
          updatedData
        );
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
        {/* ***************Begin::Controller For A5****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            5 Context of the organisation
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto bg-graye`}>

              <table>
              {controlerA5.map((el, index) => (
                  <tr className={`${el.color ? "green" : ""}`}>
                    {/************Begin:: Sr No :***********  */}
                    <td>
                      <p style={{ width: "1rem" }}>{el.srNo}</p>
                    </td>
                    {/************End:: Sr No :***********  */}

                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <p
                        id="data"
                        className="overflow-hidden"
                        style={{ width: "16rem" }}
                      >
                        {el.controller}
                      </p>
                    </td>
                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <select
                        value={controlerA5[index].condition}
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
                        value={controlerA5[index].description}
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
                          {controlerA5[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA5${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA5${index}`}
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
                      <span onClick={() => handleShow(el.help_data)}>
                        <BiHelpCircle title="help" className="ico2" />
                      </span>
                    </td>
                  </tr>
              ))}
              </table>
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A5********************** */}
      </div>

      {/******************* Help Modal ************************** */}
      <Modal show={modalShow} size="lg" onHide={handleClose} animation={false}>
        <Modal.Header className="border-0" closeButton>
        <Modal.Title>Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HelpModal data={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}
