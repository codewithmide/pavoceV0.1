"use client";

import { Web3Button } from "@web3modal/react";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "wagmi";

const ProfileNav = () => {

  return (
    <div className="ended gap-3">
      <Web3Button />
    </div>
  );
};

export default ProfileNav;
