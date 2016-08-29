import {
    Platform
}
from 'react-native';



class NavHeight {
    static getHeight() {
        if (Platform.OS === 'ios') {
            return 44;
        } else {
            return 56;
        }
    }
}

export default NavHeight;