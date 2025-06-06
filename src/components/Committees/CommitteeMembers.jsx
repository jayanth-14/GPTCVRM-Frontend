import React from "react";

const MembershipRecord = ({ member, key }) => {
  
  const image = import.meta.env.VITE_BACKEND + member.image;
  
  return (
    <tr key={key} class="bg-white hover:bg-gray-100 w-5">
      <td class="border border-gray-300 w-4/5 h-4/5"><img src={image} alt={member.name} className="object-cover "/></td>
      <td class="py-3 px-4 border border-gray-300">{member.name}</td>
      <td class="py-3 px-4 border border-gray-300">{member.role}</td>
      <td class="py-3 px-4 border border-gray-300">{member.depo_code}</td>
      <td class="py-3 px-4 border border-gray-300">{member.email}</td>
      <td class="py-3 px-4 border border-gray-300">{member.number || "No Number Available"}</td>
    </tr>
  );
};


function CommitteeMembers({ members }) {
  return (
    <section class="max-w-4xl mx-auto mt-10 p-4 sm:p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-4xl font-bold text-red-700 text-center">Committee Members </h2>
      {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-6"> */}
        <table class="w-full border-collapse border border-gray-200">
          <thead>
            <tr class="bg-red-700 text-white">
              <th class="py-3 px-6 border border-gray-300">Photo</th>
              <th class="py-3 px-6 border border-gray-300">Member Name </th>
              <th class="py-3 px-6 border border-gray-300">Role</th>
              <th class="py-3 px-6 border border-gray-300">department</th>
              <th class="py-3 px-6 border border-gray-300">email</th>
              <th class="py-3 px-6 border border-gray-300">Phone</th>


            </tr>
          </thead>
          <tbody>
            {members ? members?.map((member) => {
              if(!member) return;
              return <MembershipRecord member={member} key={member.id} />;
            }) :<tr> <td colSpan={4} className="text-center text-2xl p-5">
               No Member available currently
              </td></tr>}
          </tbody>
        </table>
      {/* </div> */}
    </section>
  );
}

export default CommitteeMembers;
