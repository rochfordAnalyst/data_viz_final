import * as React from "react"



// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 15,
  maxWidth: 1500,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginTop:21,
  paddingLeft:18,
  marginBottom: 25,
}
const subtitleStyles = {
  marginTop:25,
  paddingLeft:18,
  marginBottom: 35,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 30,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Approval Rates by County, Race, Income Brackets over Time",
        url: "https://public.tableau.com/app/profile/brian.rochford/viz/finalproject1_16514431483670/Dashboard2?publish=yes",
    description:
      "This visual shows the 5 largest states crime and mortgage rates in low income areas",
    color: "#E95800",
  },
  {
    text: "Dashboard 2 All 3",
    url: "https://public.tableau.com/app/profile/brian.rochford/viz/finalprojectDash3/Dashboard2?publish=yes",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Mortgage Application Count Distrbution over Time",
    url: "https://docs.google.com/document/d/1wTHueSJ9YGJQ2onokbuhqsd9ee_88npSZE4-ynwOru4/edit",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Mortgage Data Codebook",
    url: "https://docs.google.com/document/d/1wTHueSJ9YGJQ2onokbuhqsd9ee_88npSZE4-ynwOru4/edit",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Crime Data Source",
    url: "https://www.openicpsr.org/openicpsr/project/115006/version/V1/view?path=/openicpsr/115006/fcr:versions/V1.3/nanda_crime_county_2002-2014_01P_csv_with_readme.zip&type=file",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
  {
    text: "Resource 1",
    url: "http://www.realcostofprisons.org/materials/TTT_paper3.pdf",
    badge: true,
    description:
      "This Research paper analyzes the effect of having home mortgage access reduce crime rates"
  }

]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
      
        <br />
        <span style={headingAccentStyles}>Exploring Crime Rates and ESG in the Mortgage Industry (New York, California, Texas, Illinois, Florida</span>
      </h1>
      
      <p style={paragraphStyles}>
        <p>Created by Brian Rochford, Kevin Chavez, and Raj Sidhu</p>
        <p>The data collection procces required using Recursion Cos HMDA Query Analyzer to extract what Mortgage related variables and dimensions we wanted. 
          We chose to look at mortgage rate by race, income brackets, loan amount brackets, FHFA Low Income Area Flag,</p>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
        
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    
    </main>
  )
  
}


export default IndexPage
