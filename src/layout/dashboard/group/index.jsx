import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getGroups from '../../../service/getGroups';

const Group = () => {
  const { groupId } = useParams();
  const { data:groups } = getGroups();
  const [currentGroup, setCurrentGroup] = useState(null);
  
  useEffect(() => {
    if (groups && groupId) {
      const found = groups.find(group => group._id.toString() === groupId?.toString());
      setCurrentGroup(found);
    }
  }, [groups, groupId]);

  return (
    <div className="bg-red-300 w-full">
      {currentGroup?.name}
    </div>
  );
}

export default Group;