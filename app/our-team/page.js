"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";
import axiosInstance from "@/helpers/axiosInstance";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await axiosInstance.get(`/posts?term_type=our_team`);
        setTeamMembers(res.data.data);
      } catch (error) {
        setError("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-3">
        <div className="flex justify-center gap-3 mb-3">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-bold text-header_text">Our Team</h2>
            <p className="text-para_color text-base font-semibold">
              We are a group of innovative, experienced, and proficient team members. You will love to collaborate with us.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4 py-5 mb-10 gap-5">
          {teamMembers.map((member) => (
            <figure key={member.id} className="shadow-md rounded-md overflow-hidden">
              <Image 
                src={member.featured_image || '/placeholder.jpg'} 
                width={200} 
                height={200} 
                className="w-full h-48 md:h-60 xl:h-60 lg:h-60 object-cover" 
                alt={member.name} 
              />
              <figcaption className="p-2">
                <h3 className="text-lg text-sm font-semibold">{member.name}</h3>
                <p className="text-para_color font-semibold text-sm">
                  {member.extraFields.find(field => field.meta_name === "position")?.meta_value || "No Position Available"}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
