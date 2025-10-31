import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/connect";

export default async function Home() {
  
  const getTimeline = await db.query(`SELECT useraccounts.username, useraccounts.id, userposts.* FROM useraccounts JOIN userposts ON useraccounts.id = userposts.accountid`)
  const gotTimeline = getTimeline.rows 
  console.log(gotTimeline)  

  return (
    <main>
      <div>
        {gotTimeline.map(function(item) {
          return(
            <div key={item.id}>
              <Image src={item.posturl} alt={item.posttext} width={300} height={300}/>
              <div className="timeline-post-info">
                <h2>{item.username}</h2>
              </div>
              <div className="post-info">
                <p>{item.posttext}</p>
                <p>{item.likes}</p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  );
}
