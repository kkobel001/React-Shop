import React from 'react';


type UserTypes = 'Admin' | 'User';
type CommentsType= 'Public' | 'Private';

type Accessmpde= 1| 2 | 3| 4 |5 ;

type BiggerTypes={
    commonProperty:string;
    additionalProperty: string;

}
type SmallerType= {
    commonProperty: string;
}

 const info = () => {

    const myUserTypes: UserTypes='Admin';
    const myCommentsTypes: CommentsType ='Public'

    function showProperty(someObject: SmallerType){
        return someObject.commonProperty;
    }

     const bigger :BiggerTypes = {
         commonProperty: 'text',
         additionalProperty : 'test',

     }


}

export default info; 