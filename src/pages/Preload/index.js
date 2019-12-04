import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

const Preload = ({name, navigation}) => {
  navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
    }),
  );

  // if (!name) {
  //   //Mandar para StarterStack
  //   navigation.dispatch(
  //     StackActions.reset({
  //       index: 0,
  //       actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
  //     }),
  //   );
  // } else {
  //   navigation.dispatch(
  //     StackActions.reset({
  //       index: 0,
  //       actions: [NavigationActions.navigate({routeName: 'AppStack'})],
  //     }),
  //   );
  // }

  return null;
};

const mapStateToProps = state => ({
  name: state.UserReducer.name,
});

export default connect(mapStateToProps)(Preload);
