import { Dimensions, TouchableOpacity } from 'react-native'

export const colors = {
  primaryDark: '#42007c', // '#1c6747'
  primary: '#6b00b0', // '#499167'
  primaryLight: '#9700e8', // '#5fdd9d'
  secondary: '#6F00FF',
  danger: '#d9534f',
  warning: '#ffc107',
  white: '#ffffff',
  black: '#000000',
  softWhite: '#f9f9f9',
  softBlack: '#0F0F0F',
  grey: '#696969',
  darkGrey: '#323232',
  lightGrey: '#D3D3D3'
}

export const fonts = {
  family: {
    primary: 'Inter_400Regular'
  },
  size: {
    extraLarge: 20,
    large: 18,
    medium: 16,
    small: 14,
    extraSmall: 12
  }
}

export const layout = {
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height)
}

export const styles = {
  // main styles

  screenContainer: {
    style: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 20
    },
    contentContainerStyle: {
      alignContent: 'center',
      justifyItems: 'center'
    }
  },
  primaryButton: {
    useForeground: true,
    type: 'solid',
    buttonStyle: {
      height: 40,
      borderRadius: 5
    },
    titleStyle: {
      color: colors.white,
      fontFamily: fonts.family.primary,
      fontSize: fonts.size.medium
    },
    linearGradientProps: {
      colors: [colors.primaryLight, colors.primary, colors.primaryDark],
      start: { x: 0, y: 0.5 },
      end: { x: 1, y: 0.5 }
    }
  },
  linkButton: {
    type: 'clear',
    titleProps: { allowFontScaling: false },
    TouchableComponent: TouchableOpacity,
    titleStyle: {
      color: colors.primary,
      fontFamily: fonts.family.primary,
      fontSize: fonts.size.medium
    }
  },
  customText: {
    allowFontScaling: false,
    style: {
      fontFamily: fonts.family.primary,
      fontSize: fonts.size.medium
    }
  },
  customInput: {
    adjustsFontSizeToFit: true,
    allowFontScaling: false,
    placeholderTextColor: colors.grey,
    errorProps: { allowFontScaling: false },
    style: {
      color: colors.softBlack,
      fontFamily: fonts.family.primary,
      fontSize: fonts.size.medium
    },
    errorStyle: {
      color: colors.danger
    }
  },
  iconButton: {
    type: 'solid',
    buttonStyle: {
      height: 40,
      borderRadius: 5,
      backgroundColor: colors.secondary
    },
    titleStyle: {
      color: colors.white,
      fontFamily: fonts.family.primary,
      fontSize: fonts.size.medium
    },
    iconContainerStyle: {
      marginRight: 15
    }
  },

  // Login screen
  // email login

  logoContainer: {
    style: {
      alignItems: 'center',
      marginBottom: 40
    }
  },
  logo: {
    style: {
      width: 200,
      height: 200
    }
  },
  emailLoginButton: {
    buttonStyle: {
      marginTop: 30,
      marginHorizontal: 10
    }
  },
  signUpRow: {
    style: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    }
  },
  forgotPassButton: {
    titleStyle: {
      fontSize: 14
    },
    containerStyle: {
      alignSelf: 'flex-start',
      marginTop: -10
    }
  },
  dontHaveAccount: {
    style: {
      fontSize: fonts.size.small
    }
  },
  signUpButton: {
    titleStyle: {
      fontSize: fonts.size.small
    }
  }

}
