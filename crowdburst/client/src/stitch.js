import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Stitch, AnonymousCredential} from 'mongodb-stitch-react-native-sdk';

class Stitch2 extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Stitch Test</Text>
        </View>
      </SafeAreaView>
    );
  }

  async componentDidMount() {
    console.log('=> App/componentDidMount');
    await this._loadClient();
  }

  _loadClient() {
    console.log('=> App/_loadClient');

    Stitch.initializeDefaultAppClient('crowdburst-rdeze').then(client => {
      if (client.auth.isLoggedIn) {
        client.auth
          .loginWithCredential(new AnonymousCredential())
          .then(user => {
            console.log('Successfully logged in as user ${user.id}');
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log(client);
        console.log('Error initialize Client');     // Always fall here
      }
    });
  }
}

export default Stitch2;