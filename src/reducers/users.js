var initialState = [
    {
        id: 1,
        name: 'Nguyễn Công A',
        image: null,
        numberphone: '0355038248',
        email: 'nguyencongnguyen.hatrung@gmail.com'
    },
    {
        id: 2,
        name: 'Nguyễn Công b',
        image: null,
        numberphone: '0355038248',
        email: 'nguyencongnguyen.hatrung@gmail.com'
    }, {
        id: 3,
        name: 'Nguyễn Công c',
        image: null,
        numberphone: '0355038248',
        email: 'nguyencongnguyen.hatrung@gmail.com'
    },

];

const users = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
};

export default users;