import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'ap-southeast-1_CbKs3NEMN',
    ClientId: '5ifpspf2e0p8i4b249tpnqgglr'
}

export default new CognitoUserPool(poolData);