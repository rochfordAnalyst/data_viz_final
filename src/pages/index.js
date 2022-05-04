import * as React from "react"



// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  color: "#900028",
  marginTop: 0,
  marginBottom: 15,
  maxWidth: 1111,
}
const headingAccentStyles = {
  color: "#900028",
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
  paddingLeft: 100,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 1000,
  marginBottom: 30,
}

const linkStyle = {
  color: "#585858",
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
    text: "Presentation",
    url: "https://docs.google.com/presentation/d/1bxWYxqrgQ8AaSLXCkY0Q-Cw3MfTgPBHTg_wmonMEoHI/edit#slide=id.p",
    description:
      "Describing Process, Initial Hypotheses, Findings, and Insights into Social and Governance Factors regarding the Mortgage industry and crime across 5 major states.",
    color: "#BC027F",
  },
  {
    text: "High Level Summary: Approval rates by County over Time",
        url: "https://public.tableau.com/app/profile/brian.rochford/viz/highLevelMortgageApprovalRatesSummary/HighLevelDashboard",
    description:
      "This visual shows the 5 largest states weighted average mortgage approval rates by county, race, year, income brackets, loan amount brackets, and a parameter control based on the property crime per population ratio of each county.",
    color: "#BC027F",

  },
  {
    text: "Drilled Down View: Florida vs California Approval Rates by County over Time",
        url: "https://public.tableau.com/app/profile/brian.rochford/viz/drilldownMortgageApprovalbyCounty/Dashboard4?publish=yes",
    description:
      "This visual shows the approval rates in California and Florida with the same dimensions as dashboard map above. Shows significant differences in approval rate decline in counties in Florida compared to California counties.",
    color: "#BC027F",
  },
  {
    text: "Treemap and Highlight tables Relating Total crime, approval rates, denial rates, and income",
    url: "https://public.tableau.com/app/profile/kevin.j.chavez/viz/CrimeandMortgage/LoansApprovedorDeniedbyRace?publish=yes",
    description:
      "In this Dashboard the Treemap portrays the 5 Different states and Races. In which we can see the total crime to population ratio and the percent of mortgage loans approved. Also showing highlight tables by income brackets based on the denial rates for each.",
    color: "#BC027F",
  },
  {
    text: "Total Crime by County Over Time and Total Crime Rates vs Approval Rates Over Time",
    url: "https://public.tableau.com/views/DataVisualizationproject_16516239443930/FinalDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    description:
      "Total crime by county and state. You can select into individual states and change it by year to see the change in crime over time.",
    color: "#BC027F",
  },
  {
    text: "Mortgage Data Codebook",
    url: "https://docs.google.com/document/d/1wTHueSJ9YGJQ2onokbuhqsd9ee_88npSZE4-ynwOru4/edit",
    description:
      "Interpretting the columns that came from mortgage query and there importance to our study.",
    color: "#BC027F",
  },
  {
    text: "Crime Data Source",
    url: "https://www.openicpsr.org/openicpsr/project/115006/version/V1/view?path=/openicpsr/115006/fcr:versions/V1.3/nanda_crime_county_2002-2014_01P_csv_with_readme.zip&type=file",
    description:
      "The source for the yearly county level crime data used.",
    color: "#BC027F",
    
  },
  {
    text: "Population Data Source",
    url: "https://data.census.gov/cedsci/table?q=United%20States",
    description:
      "The source for the 2019 county level population data by race used.",
    color: "#BC027F",
    
  },
  {
    text: "Final Data Set",
    url: "https://drive.google.com/file/d/1-Mx4pcek5a3OQKU1ZIWQpr4ul83k8e7z/view",
    description:
      "Final Merge dataset. Population and Crime dimensions will have repeated values.",
    color: "#BC027F",
    
  },
  {
    text: "California Crime Trends Research Validation Source",
    url: "https://www.ppic.org/publication/crime-trends-in-california/",
    badge: true,
    description:
    "This Research paper analyzes the effect of having home mortgage access reduce crime rates",
    color: "#BC027F",
    
  },
  {
    text: "Research Validation Source",
    url: "http://www.realcostofprisons.org/materials/TTT_paper3.pdf",
    badge: true,
    description:
    "This Research paper analyzes the effect of having home mortgage access reduce crime rates",
    color: "#BC027F",
  },


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
          We chose to look at Mortgage Approval and Denial Rates by state, county, race, income brackets, loan amount brackets, application count, and FHFA Low Income Area Flag (only available from 2010-2021)</p>
          <p>We then found a county level crime dataset spanning from 2002-2014. We merged these two datasets by county FIPS code and year. After we collected county level population data by each race for only 
             2019. This created another dimension by introducing a per population ratio to better compare crime in counties with different demogrpahics.</p>
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
