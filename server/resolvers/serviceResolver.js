const {sequelize} = require('../db');

const items = ({serviceID}) => {
  return new Promise((resolve) => {
    sequelize.query(`select items.*
                     from services s
                              join serviceItems items on s.serviceID = items.serviceID
    where s.serviceID=${serviceID}`).then((result) => {
      resolve(result[0]);
    });
  });
};

const tags = ({serviceID}, {count}) => {
  return new Promise((resolve) => {
      if (!count) count = 20;
      sequelize.query(`select s.* from serviceTags st, tags s where serviceID=${serviceID} and st.tagID=s.tagID limit 0,${count}`).then((results) => {
        resolve(results[0]);
      })
    }
  )
};

module.exports = {items, tags};
