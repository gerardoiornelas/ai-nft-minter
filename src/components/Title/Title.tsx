import React, { FC } from "react"
import PropTypes from "prop-types"

import HeroTitle from "./HeroTitle"
import SegmentTitle from "./SegmentTitle"
import SegmentTitleAlt from "./SegmentTitleAlt"
import SectionTitle from "./SectionTitle"

const TitleComponents = {
  hero: HeroTitle,
  segment: SegmentTitle,
  segmentAlt: SegmentTitleAlt,
  section: SectionTitle,
}

interface Props {
  variant: "hero" | "segment" | "segmentAlt" | "section"
  children?: React.ReactNode
}

const Title = ({ variant, children, ...props }: Props) => {
  return React.createElement(TitleComponents[variant], { ...props }, children)
}

export default Title
