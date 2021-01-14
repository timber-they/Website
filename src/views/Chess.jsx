import {Divider} from "../elements/Dividers";
import React from "react";
import {UpDown, UpDownWide} from "../styles/animations";
import SVG from "../components/SVG";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import * as PropTypes from "prop-types";
import { colors } from '../../tailwind'

const Chess = ({children, offset}) => (
    <>
        <Divider bg="#261a0d" clipPath="polygon(0 4%, 100% 16%, 100% 94%, 0 82%)" speed={0.2}
                 offset={offset}/>
        <Divider speed={0.1} offset={offset}>
            <UpDown>
                <SVG icon="box" hiddenMobile width={6} fill={colors["grey-light"]} left="60%"
                     top="70%"/>
                <SVG icon="upDown" hiddenMobile width={8} fill={colors['blue']} left="65%"
                     top="25%"/>
                <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="30%" top="10%"/>
                <SVG icon="upDown" hiddenMobile width={24} fill={colors.green} left="85%"
                     top="85%"/>
            </UpDown>
            <UpDownWide>
                <SVG icon="arrowUp" hiddenMobile width={16} fill={colors["green"]} left="5%"
                     top="80%"/>
                <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="55%"/>
                <SVG icon="circle" width={6} fill={colors.white} left="80%" top="20%"/>
                <SVG icon="upDown" hiddenMobile width={8} fill={colors['grey-darkest']} left="40%"
                     top="5%"/>
            </UpDownWide>
            <SVG icon="circle" width={6} fill={colors.white} left="7%" top="25%"/>
            <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="30%" top="60%"/>
            <SVG icon="box" width={6} fill={colors.orange} left="10%" top="15%"/>
            <SVG icon="box" width={12} fill={colors['grey-darkest']} left="35%" top="40%"/>
            <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="75%"/>
        </Divider>
        <Content speed={0.4} offset={offset}>
            <Inner>{children}</Inner>
        </Content>
    </>
)

export default Chess

Chess.propTypes = {
    children: PropTypes.node.isRequired,
    offset: PropTypes.number.isRequired,
}
