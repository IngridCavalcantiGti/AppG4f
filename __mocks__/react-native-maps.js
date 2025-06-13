
import React from 'react';
import { View } from 'react-native';

const MockMapView = (props) => <View>{props.children}</View>;
const MockMarker = (props) => <View>{props.children}</View>;

MockMapView.Marker = MockMarker;

export const Marker = MockMarker;
export default MockMapView;
