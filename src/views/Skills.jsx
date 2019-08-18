import {Divider} from "../elements/Dividers";
import React from "react";
import {UpDown, UpDownWide} from "../styles/animations";
import SVG from "../components/SVG";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import * as PropTypes from "prop-types";
import { colors } from '../../tailwind'

const Skills = ({children, offset}) => (
    <>
        <Divider bg="#006775" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2}
                 offset={offset}/>
        <Divider speed={0.1} offset={offset}>
            <UpDown>
                <SVG icon="box" hiddenMobile width={6} fill={colors["grey-light"]} left="50%"
                     top="75%"/>
                <SVG icon="upDown" hiddenMobile width={8} fill={colors['pink']} left="70%"
                     top="20%"/>
                <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%"/>
                <SVG icon="upDown" hiddenMobile width={24} fill={colors.orange} left="80%"
                     top="80%"/>
            </UpDown>
            <UpDownWide>
                <SVG icon="arrowUp" hiddenMobile width={16} fill={colors["green-light"]} left="5%"
                     top="80%"/>
                <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%"/>
                <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%"/>
                <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%"
                     top="10%"/>
            </UpDownWide>
            <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%"/>
            <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="20%" top="65%"/>
            <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%"/>
            <SVG icon="box" width={12} fill={colors['grey-darkest']} left="30%" top="40%"/>
            <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%"/>
        </Divider>
        <Content speed={0.4} offset={offset}>
            <Inner>{children}</Inner>
        </Content>
    </>
)

export default Skills

Skills.propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number.isRequired,
}
