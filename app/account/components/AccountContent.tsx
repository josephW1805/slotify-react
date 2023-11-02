"use client";

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, user, userDetails } = useUser();
  const player = usePlayer();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out!");
    }
  };

  return (
    <div className="mb-7 px-6">
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Name: </span>
          <p>{userDetails?.full_name}</p>
        </div>
        <div className="flex justify-between">
          <span className="font-bold">Email: </span>
          <p>{user?.email}</p>
        </div>
        <Button onClick={handleLogout} className="px-6 py-2">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AccountContent;
