const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {id: 1, photoUrl: 'https://cutt.ly/IapCK4M', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, photoUrl: 'https://cutt.ly/IapCK4M', followed: true, fullName: 'Vasya', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 3, photoUrl: 'https://cutt.ly/IapCK4M', followed: false, fullName: 'Sasha', status: 'I am a boss three', location: {city: 'Minsk', country: 'Belarus'} }
    ]

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                   return u;
                } )
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                } )
            }

        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ] }
        }

        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (user) => ({type: SET_USERS, user})


export default usersReducer;





