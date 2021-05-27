/* eslint-disable no-undef */
import * as React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { useFonts } from '@use-expo/font'; // useFonts Hooks
import AppLoading from 'expo-app-loading';
import { ROBOTO_MEDIUM, ROBOTO_LIGHT } from 'assets'; // import Fonts

import { Text as Font } from 'theme/index';

/**
 * @typedef TTextType
 * @type { object }
 * @property { any  } url
 * @property { object  } attributes
 * @property { number  } index
 */
type TTextType = {
    attributes: {
        description?: string;
        scrollX?: Animated.Value;
        index?: number;
    };
};

// function component geos here
// eslint-disable-next-line react/display-name
export default ({ attributes: { description } }: TTextType): JSX.Element => {
    // import font
    let [fontsLoaded] = useFonts({
        'Roboto-medium': ROBOTO_MEDIUM,
        'Roboto-light': ROBOTO_LIGHT,
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <TextContenair>
            <Font center large style={{ fontFamily: 'Roboto-light' }}>
                {description}
            </Font>
        </TextContenair>
    );
};

// Create a AnimatedText component that'll render a <Text> tag with some styles

const TextContenair = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    position: relative;
    width: auto;
`;
