export const addUser = (newUser) => {
    return {
      type: "ADD_USER",
      value: newUser,
    };
  };

export const logoff = () => {
    return {
        type: 'LOGOFF',
        value: null
    }
}

export const addListing = (newListing) => {
  return {
    type: 'ADD_LISTING',
    value: newListing
  }
}

export const removeListing = (listingIdx) => {
  return {
    type: 'REMOVE_LISTING',
    value: listingIdx
  }
}