var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"IMAGE: images/intro.png"},"^<u><b><i>Geneva, Switzerland 17-</i></b></u>","\n","^Elizabeth is swiftly moving throughout the Frankenstein home tidying and straightening it up. Victor is going to be headed off to the University of Ingolstadt today to further his studies.","\n","^“I’m coming! Don’t worry!” Victor yells as he pulls his suitcase down the stairs.","\n","^“Just in time Victor! You wouldn’t want to miss your carriage ride now would you?” Elizabeth calls out from the foyer.","\n","^“Yes, Yes, right as always Elizabeth,” Victor retorts playfully as he rounds the corner towards the front door.","\n","^Victor’s father, Alphonse, and his two younger brothers, Ernest and William, come out from the living room to say their goodbyes.","\n","^Alphonse gives him a strong pat on the back while sporting a proud smile. Ernest and William appear a little sad while they give Victor their goodbye hugs.","\n","^Victor picks up each brother and spins them around whilst giving them a big hug and says, “I will miss everyone! But don’t worry, I’m planning on doing great things during my studies! The distance apart will be worth it.”","\n",["ev",{"^->":"0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":2},{"s":["^THE CARRIAGE ARRIVES",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.17.s"},[{"#n":"$r2"}],"\n",{"->":"carriage"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"carriage":[["^The sound of a horse whinnying outside quickly caught everyone's attention. Victor set each brother down and then moved to say goodbye to Elizabeth. They shared a quick embrace before she had to let him go. Then Victor waved goodbye and was out the door.","\n","^Victor was off to start his new journey.","\n",["ev",{"^->":"carriage.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^SO WHAT’S NEXT?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"carriage.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"next"},{"#f":5}]}],{"#f":1}],"next":[["^Elizabeth excused herself for a moment but instead of going back to her room she hurried off to the back of the house. She quietly slipped out the back door and ran down a path till she reached a house that was a few down.","\n","^Elizabeth knocked on the front door with urgency and anxiously waited for it to be answered. She subtly hopped from one foot to the other while trying to stay calm.","\n","^She could hear footsteps approaching and straightened up just as the door swung open and a frazzled Henry Clerval was standing in the doorway.","\n","^“Elizabeth?” Henry said while rubbing one of his eyes and blinking a couple of times to focus them. Then in a concerned tone he asked, “What are you doing here? Is everything ok?”","\n","^Elizabeth took a deep breath, looked straight into his eyes, and said, “Henry I need you to do me a humongous favor…I need you to go to Ingolstadt.”","\n",["ev",{"^->":"next.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^LOOKS LIKE IT’S TIME FOR COLLEGE ORIENTATION",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"next.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"Ingolstadt"},{"#f":5}]}],{"#f":1}],"Ingolstadt":[["^<u><b><i>Ingolstadt, Germany 17–</i></b></u>","\n","^Henry was pacing the sidewalk in front of the science building on campus. He had been able to make it to Ingolstadt on a very short notice and was waiting for Victor to exit the building. He couldn’t believe he agreed to spy on Victor. Actually, it isn’t so much as spying on him as it is just keeping an eye on him. But Elizabeth kind of made it sound like he would be babysitting Victor…(Henry has known Victor almost his entire life and so he knew Elizabeth was probably right about that).","\n","^Growing up with Victor meant they have noticed a few things, he doesn’t have the best judgement at times and he often bites off more than he can chew.","\n","^Which is why he knew he had to do this for Elizabeth. Henry cares about both of them a lot.","\n","ev","str","^HENRY CONTINUES TO WAIT OUTSIDE FOR VICTOR","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^HENRY GOES INTO THE SCIENCE BUILDING","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"wait"},{"#f":5}],"c-1":["\n",{"->":"inside"},{"#f":5}]}],{"#f":1}],"wait":["^As Henry is in the middle of pacing, with his back turned away from the building, Victor emerges.","\n","^“Clerval? Is that you?” Victor asks as Henry whips his head around. Victor takes two excited strides towards Henry and instantly engulfs him a bear hug.","\n","^“What took you so long! I’ve been waiting for you forever out here! You’ve got to give me a proper tour!” Henry jests.","\n","^Victor’s eyes almost jump out of his head as realization hits him. “Henry! You enrolled?” Victor exclaims.","\n","^“Of course! I couldn’t let my best friend do college without me! Plus I heard they have a good...um...art program,” Henry replies.","\n","^“This is going to be fantastic! Let’s get you settled in then,” Victor says as he leads Henry in the direction of his dorm.","\n",{"->":"later"},{"#f":1}],"inside":[["^Tired of waiting, Henry opens the door and enters the science building. He has no idea what Victor’s class schedule is like but he knows how much Victor loves <b><u>Cornelius Agrippa</u></b> so he follows the signs towards the Natural Philosophy classroom.","\n","^A group of students pass by him in the hallway but he doesn’t see Victor’s face among them so he continues walking.","\n","^Once he reaches the classroom he can hear three voices. One of them is Victor’s but the other two sound like older men. Henry peers into the window and sees Victor talking to what appears to be two professors.","\n","^Henry loses all his confidence right away and hurries back in the other direction. He makes his way through the building, pushes through the doors, and is once again back on the sidewalk outside.","\n","ev","str","^BACK TO SQUARE ONE","/str","/ev",{"*":".^.c-0","flg":4},["ev",{"^->":"inside.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^A FEW WEEKS LATER",{"->":"$r","var":true},null]}],{"c-0":["\n",{"->":"wait"},{"#f":5}],"c-1":["ev",{"^->":"inside.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"later"},{"#f":5}]}],{"#f":1}],"later":[["^It’s been a few weeks into the semester and Henry didn’t have any classes today.","\n","^“I’m going to be in class all day, do you want to tag along? I want you to meet my professors M. Waldman and M. Kreme before the semester is over in case your dad makes you come back home,”  Victor said to Henry.","\n","ev","str","^SAY YES TO TAGGING ALONG","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^STAY BEHIND","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"yes"},{"#f":5}],"c-1":["\n",{"->":"stay"},{"#f":5}]}],{"#f":1}],"yes":["^“Ok but only because I’m curious to see if these professors think you’re as smart as YOU think yourself to be,” Henry joked.","\n","^Henry didn’t actually want to tag along. He had other plans for the day that involved snooping around Victor’s room while he was gone. It had been a few weeks since they'd settled in and he promised Elizabeth that he would write her updates periodically.","\n","^Henry decided he would go but come up with an excuse to leave early...","\n",{"->":"stay"},{"#f":1}],"stay":[["^With Victor gone Henry was able to investigate. Henry thought for a minute and pondered about where to even begin.","\n","ev","str","^START WITH HIS BEDROOM","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^START WITH HIS TEXTBOOK ON THE COUNTER","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"bedroom"},{"#f":5}],"c-1":["\n",{"->":"textbook"},{"#f":5}]}],{"#f":1}],"bedroom":[["^Victor’s bedroom door was always shut. In the beginning of the semester Victor and Henry would hang out in their common area but lately Victor has been holed up in his bedroom for hours on end.","\n","^Sometimes when Henry wakes up in the middle of the night to get a drink of water he sees the faint light of a candle seeping out from under Victor’s door.","\n","^Henry slowly turns the doorknob of the bedroom door. And sneaks in quietly.","\n","ev","str","^INSPECT VICTOR’S DESK","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^LOOK THROUGH HIS NIGHTSTAND","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"desk"},{"#f":5}],"c-1":["\n",{"->":"nightstand"},{"#f":5}]}],{"#f":1}],"desk":[["^Henry crept up to Victor’s desk. It was strewn with papers all full of notes. Henry accidentally stepped on a stray pencil that he had knocked to the floor.","\n","ev","str","^PICK UP THE PENCIL","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^LEAVE THE PENCIL","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"pencil"},{"#f":5}],"c-1":["\n",{"->":"leave"},{"#f":5}]}],{"#f":1}],"pencil":["^Henry bent down to pick up the pencil but noticed something strange. Multiple ink bottles were sprawled under the desk...completely empty. The notes above were all written by pencil so where did all of this ink go?","\n",{"->":"nightstand"},{"#f":1}],"leave":["^Henry left the pencil where it fell and hoped Victor wouldn’t notice. He only needed to inspect one last spot.","\n",{"->":"nightstand"},{"#f":1}],"nightstand":[["^Victor would be home soon so Henry had to hurry and check the last spot in the room that could be hiding something. Henry opened the top drawer of the nightstand and moved his hand around until it came in contact with a journal.","\n","^He opened it to find the missing pages that were ripped out of the textbook inside.","\n","ev","str","^READ THE TEXTBOOK PAGES","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^MOVE ON TO THE REST OF THE JOURNAL","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"read"},{"#f":5}],"c-1":["\n",{"->":"journal"},{"#f":5}]}],{"#f":1}],"read":["^As Henry read through the textbook pages all that jumped out at him were specific words like:","\n","^<ul>","\n","^<li><b>LIFE</b></li>","\n","^<li><b>CREATION</b></li>","\n","^<li><b>ALCHEMY</b></li>","\n","^<li><b>ORGANS</b></li>","\n","^<li><b>HUMAN</b></li>","\n","^<li><b>CHEMICAL</b></li>","\n","^<li><b>ELECTRICITY</b></li>","\n","^</ul>","\n","^Etc. It was clear that these pages held some sort of significance.","\n","^A million different thoughts raced through Henry’s head and he knew he had to continue on to the rest of the journal.","\n",{"->":"journal"},{"#f":1}],"journal":[["^The majority of the journal was filled with pages upon pages of illustrations and writing...all out of ink.","\n","^The illustrations were of human body parts, shapes, chemicals, organs, instruments, etc. and they were extremely detailed.","\n","^There were even designated sections of the journal dedicated to different theories, mechanisms, and detailed instructions on how to create human life.","\n","^This deeply worried Henry but before he even had the chance to react he heard the front door knob rattling.","\n","ev","str","^HIDE THE JOURNAL IN COAT POCKET","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^PUT THE JOURNAL BACK","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"hide"},{"#f":5}],"c-1":["\n",{"->":"put"},{"#f":5}]}],{"#f":1}],"hide":["^With only a few quick seconds to decide what to do, Henry settled on shoving the journal in his coat pocket. He then slipped out of Victor’s room as fast as he could and into a chair in their common area where he could pretend he was the entire time.","\n","^But while he was there he noticed the door still wasn’t open and that it was because Victor was having trouble with the lock!","\n","^This bought Henry a few extra seconds to make it halfway to his own bedroom door before Victor entered the dorm.","\n",{"->":"night"},{"#f":1}],"put":[["^Henry put the journal back where he found it as fast as he could. Then he slipped out of the door and flung himself onto a chair in their common area so he could pretend he was there the whole time.","\n","^“Hey there Henry! Want to grab something to eat?” Victor asked Henry as he took his shoes off by the front door.","\n","ev","str","^EAT WITH VICTOR","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^TURN IN FOR THE NIGHT","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"eat"},{"#f":5}],"c-1":["\n",{"->":"night"},{"#f":5}]}],{"#f":1}],"eat":["^“Ah sure! I could use a hearty dinner!” Henry said as he sat up and moved towards the door. Henry desperately wanted to forget what he just found in Victor’s room so he thought going to grab a meal with him would help calm all the crazy conclusions that were spawning in his head at the moment.","\n","^The two left to go eat for an hour and then made their way back to their dorm.","\n",{"->":"night"},{"#f":1}],"night":[["^“I think I’m going to head to bed early tonight,” Henry waved to Victor before making his way into his room and closing the door immediately.","\n","^Henry decided to turn in early for a few reasons.","\n","^He needed to collect his thoughts on what he just found.","\n","^He wasn’t sure what to do with those thoughts once he collected them.","\n","ev","str","^IT’S NO BIG DEAL","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^IT’S A BIG DEAL","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"no"},{"#f":5}],"c-1":["\n",{"->":"big"},{"#f":5}]}],{"#f":1}],"no":["^Henry sat on the edge of his bed and began to really think for a minute about what he found. It was probably just a class project right? It was all hypothetical! Victor wasn’t actually going to try and create a human life all by himself was he?","\n",{"->":"big"},{"#f":1}],"big":[["^Henry began to pace in his bedroom as he started realizing just how big of a deal this actually was. The pieces of this strange puzzle were forming together to create a very scary picture.","\n","ev","str","^TRY TO SLEEP ON IT","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^THINK SOME MORE","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"sleep"},{"#f":5}],"c-1":["\n",{"->":"think"},{"#f":5}]}],{"#f":1}],"sleep":["^Henry resolved to get some rest and to come back to this in the morning. He even thought for a second that it might have all been some sort of bad dream! And that he would wake up and everything would be ok.","\n","^But that did not happen.","\n","^Henry woke up 2 hours later drenched in sweat from a nightmare where he saw Victor in a lab coat standing in front of some sort of human creation.","\n",{"->":"think"},{"#f":1}],"think":[["^Since Henry couldn’t sleep he knew he had to make a decision about all of this. He had promised Elizabeth that he would keep an eye out for Victor but he was nowhere near prepared for this.","\n","^Since sleep wasn’t an option tonight Henry made his way to his desk and got out a piece of paper and an envelope. He addressed the envelope to Elizabeth but hovered his hand over the paper.","\n","ev","str","^UPDATE ELIZABETH","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^WAIT A LITTLE LONGER","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"update"},{"#f":5}],"c-1":["\n",{"->":"longer"},{"#f":5}]}],{"#f":1}],"update":[["^Henry started to fill Elizabeth in on his and Victor’s studies and their time at Ingolstadt so far. He was writing about all of the good stuff before his hand jolted to a stop. He wasn’t sure what he wanted to write next…","\n","ev","str","^TELL THE TRUTH","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^LIE","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"truth"},{"#f":5}],"c-1":["\n",{"->":"lie"},{"#f":5}]}],{"#f":1}],"truth":[["^Henry decided he was going to tell Elizabeth the truth about everything he found out. He wrote down everything he saw from the textbook pages to the journal illustrations.","\n","^Except he didn’t feel any relief after writing the letter. He was now passing the burden of this information onto Elizabeth.","\n","^And so Henry felt he was at yet another crossroads.","\n","ev","str","^MAIL THE LETTER","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^DON’T MAIL THE LETTER","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"mail"},{"#f":5}],"c-1":["\n",{"->":"dont"},{"#f":5}]}],{"#f":1}],"mail":[["^Henry knew it was his duty to Elizabeth and his promise to her to mail her this letter. Especially because her instinct to be worried about Victor was right! Henry folded the letter up and tucked it inside the envelope and sealed it.","\n","^He stays up all night until the post office opens and goes there first thing in the morning to mail the letter.","\n","ev","str","^IT REACHES ELIZABETH","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^THE LETTER GETS LOST IN THE MAIL","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"reach"},{"#f":5}],"c-1":["\n",{"->":"lost"},{"#f":5}]}],{"#f":1}],"reach":["^The letter makes it to the Frankenstein household but it reaches them on the day Alphonse and Elizabeth are headed to the local park with William and Ernest so they do not receive it in time….","\n","^<b><i>THE END</i></b>","\n","done",{"#f":1}],"lost":["^The letter eventually gets lost in the mail and never makes it to Elizabeth. Henry ends up getting killed by Victor’s Creature because the truth of his findings was never able to reach Elizabeth.","\n","^<b><i>THE END</i></b>","\n","done",{"#f":1}],"dont":["^Henry ripped up the letter in his bare hands and then threw it away in the trash can by his desk. He began to draft up a new letter. One that was full of the good things that Victor and Henry had experienced at University so far. This was going to be the new letter he would mail her. There was no need to worry Elizabeth so early on.","\n",{"->":"end"},{"#f":1}],"lie":["^Henry ended the letter there and kept it short and sweet. Elizabeth would have nothing to worry about. He couldn’t burden her with this! He put the letter in the envelope and stored it in his desk drawer. He would find time to mail it later this week.","\n",{"->":"end"},{"#f":1}],"longer":["^Henry decided he didn’t need to update Elizabeth on what he found right away and that he could wait a little bit longer for that part. This way he wouldn’t be jumping to any conclusions and he would be able to find out a little more information.","\n",{"->":"update"},{"#f":1}],"textbook":[["^Henry glanced at the counter in the common area and noticed that Victor must have left his Natural Philosophy textbook by accident.","\n","ev","str","^OPEN IT","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^COME BACK TO IT LATER","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"open"},{"#f":5}],"c-1":["\n",{"->":"back"},{"#f":5}]}],{"#f":1}],"open":["^Henry flips through the textbook and notices something. He notices lots of underlining, highlighting, notes written in the margins, etc. It doesn’t appear to be too out of the blue to Henry but the pages appear to be very worn. Some of them even have spills and stains of some sort.","\n","^Then Henry notices something strange...a few of the pages are missing…Why?","\n","^Henry figures they might just be a room away.","\n",{"->":"back"},{"#f":1}],"back":["^Henry decides that since he only has a limited amount of time while Victor is gone he can always come back to the textbook later since Victor isn’t that secretive about his required school materials.","\n","^He then makes his way towards Victor’s bedroom.","\n",{"->":"bedroom"},{"#f":1}],"end":["^Henry ended up putting off mailing this letter for weeks and weeks. Just never getting around to it and eventually forgetting all about it.","\n","^But it didn’t matter anyway because Victor’s Creature ended up killing Henry because he never told anyone the truth.","\n","^<b><i>THE END</i></b>","\n","done",{"#f":1}],"#f":1}],"listDefs":{}};