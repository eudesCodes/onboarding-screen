/* eslint-disable no-undef */
import * as React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

/**
 * @typedef TIndicatorsType
 * @type { object }
 * @property { any  } url
 * @property { object  } attributes
 * @property { number  } index
 */
type TIndicatorsType = {
    attributes: {
        scrollX?: Animated.Value;
        slides: any[];
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes: { slides } }: TIndicatorsType): JSX.Element => {
    // import font

    return (
        <IndicatorsContenair>
            {slides?.map((_: any, index: number) => {
                return <AnimatedView key={index.toString()} />;
            })}
        </IndicatorsContenair>
    );
};

// Create a IndicatorsContenair component that'll render a <SafeAreaView> tag with some styles

const IndicatorsContenair = styled.SafeAreaView`
    flex: 1;
    position: relative;
    width: auto;
    flex-direction: row;
`;

// Create a AnimatedView component that'll render a <View> tag with some styles
const AnimatedView = styled(Animated.View)`
    position: relative;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    margin-right: 10px;
    background-color: #92e3a9;
`;
