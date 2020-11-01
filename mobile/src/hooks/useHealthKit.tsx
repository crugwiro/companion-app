import {useState} from 'react';
import AppleHealthKit from 'rn-apple-healthkit';

const PERMS = AppleHealthKit.Constants.Permissions;

const useHealthKit = () => {
  const [data, setData] = useState(null);

  const options = {
    permissions: {
      read: [PERMS.BiologicalSex],
    },
  };

  AppleHealthKit.initHealthKit(options, (err, results) => {
    if (err) {
        console.log("error initializing Healthkit: ", err);
        return;
    }
});

  AppleHealthKit.getBiologicalSex(null, (err, results) => {
    if (err) {
      console.log(`Error returning sex`, err);
    } 
    setData(results);
});

  return data;
};

export default useHealthKit;
