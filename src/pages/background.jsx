import React, { useEffect } from "react"
import FloatingElements from "../components/components/floatingElements"
import ReactTooltip from "react-tooltip"
import ScrollAnimation from "react-animate-on-scroll"
import { useSelector } from "react-redux"
import { Helmet } from "react-helmet"
import { communityTable, skills } from "../content/pages/Background/data"
import {
  tableAnimation,
  skillsAnimation
} from "../content/pages/Background/animations"
import { Layout } from "../components/layout"
import { analytics } from "../components/helmet/analytics"

const Background = () => {
  const theme = useSelector(state => state.theme)

  useEffect(() => {
    skillsAnimation()
  }, [])

  const SEO = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Earth Herself</title>
      <meta
        name="description"
        content="Information about the technologies I use and the communities I am part of"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://kalovelo.com/background" />
      <script>{analytics}</script>
      <meta property="og:image" content="https://kalovelo.com/SEO/meta_img.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />{" "}
    </Helmet>
  )

  return (
    <Layout>
      <SEO />
      <div className="background layout fade-in">
        <FloatingElements num={3} />
        <h1 className="background__content">
          Code like interfaces, <span className="layout__bold">clean</span> and{" "}
          <span className="layout__bold">
            <span className="background__word-bundle">
              meaningful
              <span className="background__title">a continuous goal</span>
            </span>
          </span>
        </h1>

        <h2 className="background__subtitle">Working & Forging on</h2>
        <div className="background__skills">
          {skills.map((skillContainer, index) => (
            <div key={index} className="background__skill-wrapper">
              <h5 className="background__skill-title">{skillContainer.Title}</h5>
              <div className="background__skill-container">
                {skillContainer.elements.map((skill, index) => (
                  <div
                    data-tip={skill.tooltip}
                    key={index}
                    style={{ opacity: 0 }}
                    className="background__skill background__svg float-infinite"
                  >
                    {skill.component}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="background__subtitle">Communities</h2>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          afterAnimatedIn={visible => tableAnimation(visible, theme)}
        >
          <table className="background__communities">
            <thead>
              <tr className="background__community-row">
                {communityTable.attributes.map((attribute, index) => (
                  <th
                    style={{ opacity: 0 }} //default vaules for animation
                    className="background__community-item background__community-item--head"
                    key={index}
                  >
                    {attribute}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {communityTable.content.map((element, index) => (
                <tr
                  key={index}
                  className="background__community-row background__community-row--content"
                >
                  {element.data.map((dataItem, index) => (
                    <td
                      style={{ opacity: 0 }}
                      className="background__community-item"
                      key={index}
                    >
                      {dataItem}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollAnimation>
        <ReactTooltip effect="solid" place="bottom" />
      </div>
    </Layout>
  )
}

export default Background
