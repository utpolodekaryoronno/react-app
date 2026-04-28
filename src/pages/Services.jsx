import React from 'react'

const Services = () => {
  const services = [
    {
      id: "frontend",
      title: "Frontend Development",
      desc: "Modern, responsive and high-performance UI using React & Tailwind CSS.",
      icon: "💻",
    },
    {
      id: "laravel",
      title: "Laravel Web App",
      desc: "Secure, scalable and dynamic web applications using Laravel.",
      icon: "⚙️",
    },
    {
      id: "api",
      title: "API Integration",
      desc: "REST API integration for seamless frontend-backend communication.",
      icon: "🔗",
    },
    {
      id: "bugfix",
      title: "Bug Fix & Optimization",
      desc: "Fix issues, improve speed and optimize your existing project.",
      icon: "🛠️",
    },
  ]

  return (
    < div className='pb-40'>
      {/* Service Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              My <span className="text-amber-500">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition border flex flex-col"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow">
                  {item.desc}
                </p>

                <a
                  href={`#${item.id}`}
                  className="mt-4 inline-block text-amber-500 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Sections */}
      <section id="frontend" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Frontend Development</h2>
          <p className="mt-4 text-gray-600">
            I build pixel-perfect, responsive and fast user interfaces using
            React, Tailwind CSS and modern JavaScript.
          </p>
        </div>
      </section>

      <section id="laravel" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Laravel Web Application</h2>
          <p className="mt-4 text-gray-600">
            I develop secure, scalable and maintainable web applications using
            Laravel, MySQL and REST APIs.
          </p>
        </div>
      </section>

      <section id="api" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">API Integration</h2>
          <p className="mt-4 text-gray-600">
            I connect frontend with backend services using clean and efficient
            REST APIs.
          </p>
        </div>
      </section>

      <section id="bugfix" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Bug Fix & Optimization</h2>
          <p className="mt-4 text-gray-600">
            I fix issues, refactor code and improve performance of existing
            projects.
          </p>
        </div>
      </section>

      <section id="bugfix" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4">
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi harum obcaecati quo quae possimus laboriosam mollitia, autem eius quasi debitis nemo temporibus, laborum aspernatur quam vero. Modi velit, maiores eius ducimus perferendis tempora aspernatur doloribus, eaque eum omnis sit quis quia dolore laboriosam fuga eos? Nulla, dolores! Eaque libero cum maiores soluta ea ullam alias in possimus! Illum id quidem quos ut corrupti voluptate possimus suscipit amet eos, esse ipsum laudantium tempore. Obcaecati suscipit repellat, quidem dicta laboriosam consectetur assumenda eaque molestiae ipsa et laborum ullam molestias eveniet eum ratione laudantium. Recusandae saepe, nostrum facere magnam possimus sint debitis repudiandae, animi cumque dicta expedita voluptatibus? Quia, deserunt. Totam dignissimos iure, eligendi tenetur possimus consequuntur inventore molestiae blanditiis amet architecto cupiditate velit beatae dicta iusto alias ab nobis nemo rem omnis illum reiciendis aut molestias deleniti fuga! Amet cumque fuga provident facere esse, ea accusamus facilis laborum commodi mollitia itaque ab saepe quia, inventore soluta expedita earum vel dolorem officia laboriosam! Rerum, labore repudiandae id ipsa accusamus eos atque consequatur corporis aperiam nihil doloremque quidem esse dolor magnam odio libero sequi corrupti quam aliquid blanditiis, cupiditate magni quae. Adipisci assumenda officia alias rerum nisi ea dolore debitis ipsa inventore itaque consequatur quam iste eius accusamus maxime aperiam, sunt nam aliquam autem! Sequi nam non illum, cumque, magnam, blanditiis inventore accusantium nesciunt aliquam laboriosam ad odit earum minus iste. Veniam, magnam iure repudiandae eius, nostrum incidunt nemo omnis blanditiis deleniti fugit nobis odio illum dignissimos ad. Ullam voluptatum iure inventore aperiam repudiandae dolores, possimus fugit ipsum, laudantium odit, commodi atque quaerat? Totam, corporis consectetur! Sed ratione ipsam cum obcaecati omnis quos in nam eum totam libero tempore maxime dolorem voluptas culpa dolore, corrupti voluptatibus asperiores tenetur aut molestiae amet dignissimos quo! Culpa vitae molestiae, quis rerum ipsam quaerat, impedit est eligendi, omnis nisi a harum corrupti natus? Incidunt deleniti ipsa eveniet molestias et veritatis cum? Ex accusantium accusamus consequatur cupiditate non aperiam cum possimus deserunt? Enim culpa consequatur, impedit expedita nisi soluta placeat optio atque nobis perferendis ratione quam repellendus magni esse modi? Possimus non voluptate fuga molestiae neque consequuntur quod hic repellendus rerum? Sunt, eos quae saepe repellendus placeat ad illum. Possimus quisquam consequuntur, perferendis animi impedit inventore sunt reiciendis hic vitae adipisci soluta quibusdam ut, tempore tenetur corrupti! Fugiat, a ab asperiores, ut natus quasi illo labore voluptate corporis tempora accusamus at aspernatur perspiciatis rem. Nulla consectetur molestias exercitationem cupiditate dolor, sapiente voluptates praesentium nesciunt atque. Numquam quibusdam pariatur repellendus dolorum cupiditate provident fugiat iste minima saepe ex? Cupiditate quasi sit odit, facilis inventore accusantium quibusdam reiciendis itaque! Voluptatibus quidem assumenda, voluptas aliquam quo aliquid nulla nobis itaque corporis nostrum iste facere quaerat natus excepturi architecto illo in numquam non ullam, eius suscipit. Eveniet nulla obcaecati repudiandae numquam ratione, accusamus labore voluptatum. Nemo adipisci itaque dignissimos aspernatur suscipit ut qui expedita exercitationem ullam, repellat molestiae quas debitis nesciunt quae eaque explicabo non ipsum, sit vitae sed culpa fugit repudiandae? Inventore omnis, eaque ratione nulla exercitationem sit distinctio illum enim obcaecati nesciunt molestiae. Labore quibusdam minus consequatur laboriosam velit quaerat totam itaque cupiditate error fugiat? Reiciendis aspernatur corrupti, eaque sapiente obcaecati libero eos, cupiditate deleniti nobis soluta sunt esse praesentium, voluptas officia. Vel quia commodi nam ad ut sit maxime iure. Maiores provident quod molestiae earum quia vero, vitae nemo et cumque praesentium eos? Praesentium aut sequi dolorum ut neque saepe laborum, repellendus eveniet. Dolor aliquid non sit quo. Non dicta dignissimos error facere perspiciatis vero suscipit nemo, id omnis voluptatem excepturi nesciunt dolor possimus exercitationem reprehenderit aliquam sapiente unde eum nobis blanditiis at asperiores officia quisquam eos. Eveniet a minima esse. Asperiores consequatur temporibus architecto nemo laboriosam nam repellat, voluptate voluptatibus ipsam quisquam ullam rerum nulla error reiciendis natus vero deserunt est alias maxime vel sint eum. Libero iste alias optio odit autem, porro debitis cum rerum! Iste, natus expedita est dolor excepturi quae ducimus enim nostrum inventore mollitia quod iusto voluptate impedit consequuntur quos amet veniam obcaecati totam eaque dignissimos? In ducimus impedit alias perferendis illum itaque magnam maxime voluptas, enim magni consequuntur, tenetur vel dolores. Nulla libero eveniet veniam, aliquam omnis voluptate deleniti dignissimos illum nihil unde quos rem architecto veritatis nisi, fuga ipsam porro. Nemo dolor porro quisquam odit. Atque architecto est dolor unde quasi nemo iste quod velit optio exercitationem suscipit officiis ipsum perferendis quis illo nam nisi autem tempora veniam, laborum tempore beatae sunt corporis. Eveniet, iusto! Mollitia, beatae voluptas! Nostrum dolorum quibusdam magni impedit excepturi, ab in, repudiandae quam, optio eum asperiores! Dicta laboriosam voluptatem libero ullam quas inventore officiis adipisci assumenda alias, sapiente perspiciatis voluptates rerum, ex soluta hic ab quae atque? Ipsum explicabo dolor enim. Sed libero tempora expedita cum ullam optio aspernatur laboriosam voluptatibus magnam natus. Optio molestias facilis placeat voluptas error quia quo laborum autem, qui velit ipsam consequuntur sunt aliquid dolorum dolores, laudantium a doloremque ut? Error commodi voluptatem eaque consequatur quo cumque eos illo magni odio facilis nostrum voluptatibus voluptas eveniet soluta libero, officiis recusandae optio ratione quisquam reprehenderit temporibus quidem laudantium molestias vel. Id impedit dolorem dignissimos, corporis eos odio ex iste recusandae, enim tenetur autem quasi. Fugiat pariatur doloremque rem architecto mollitia repellendus assumenda dignissimos molestias, nulla quas totam beatae quaerat fuga officiis vel optio tempora quae sed porro saepe nemo! Laborum, molestiae. Ullam odio, doloribus, accusantium non labore a cupiditate impedit modi illo beatae eum harum illum quas tempore quisquam debitis voluptas magni nam nihil. Similique, dicta incidunt. Esse voluptatum odit quod velit, porro dolorem asperiores quos inventore, molestiae in laudantium nesciunt labore at rerum minus aliquid accusantium illum ut sapiente et placeat aliquam deleniti repudiandae? Dolorem beatae iusto accusamus facilis deleniti eligendi quaerat accusantium possimus, placeat incidunt quia id excepturi. Nulla aperiam ipsa aspernatur ipsum non commodi necessitatibus dignissimos odit neque assumenda in dolore id quis mollitia ratione dicta sunt iusto eaque a temporibus, repellendus autem architecto ut. Quo illo placeat provident beatae repudiandae dolor perspiciatis ad neque sed. Neque sunt magnam enim ratione placeat libero, itaque vitae illo dolorem porro eius dolorum veritatis, quidem consequatur esse animi, deleniti et odit officia nobis provident reiciendis minus at excepturi. Laborum est, voluptate saepe magni eligendi rerum ducimus. Id consequatur quas, unde ab ad voluptatem similique. Optio nisi eum quos, debitis illo voluptates. Ea maiores enim nisi facilis fugiat reprehenderit doloribus vel qui, beatae suscipit cum molestias atque! Enim ipsum corrupti mollitia dicta obcaecati, vero iusto! Laudantium, sequi. Temporibus in impedit aspernatur eum eius sit magnam accusantium quas ducimus, facere odit quaerat saepe, accusamus commodi delectus non magni asperiores, illo mollitia doloribus numquam ipsum inventore totam? Deleniti omnis aut eligendi dignissimos iure libero accusamus ratione ipsa asperiores provident natus, tempora odit quod illo cupiditate dolorum totam modi facilis, fugit quis deserunt culpa nam eius? Facilis aliquid voluptatem similique perferendis quo aspernatur iusto sapiente nesciunt architecto obcaecati, qui minima! Sequi maxime aliquid non saepe eos sint, nihil modi hic labore vitae cupiditate! A facere dolorem vero iste, consectetur minima minus facilis, in, ipsum voluptatibus eum non expedita natus eveniet rerum distinctio quod eius quisquam accusamus necessitatibus iure nisi vitae libero. Ut possimus, eligendi iste ducimus a obcaecati itaque, quia eaque rerum distinctio voluptate quibusdam. Deleniti dolore velit, hic sed harum odit nostrum quae optio provident! Maxime illum culpa laborum impedit accusantium quos eveniet? Quisquam, dolore sapiente! Voluptatum non, autem repellat natus similique unde voluptatibus porro earum veritatis excepturi minus ullam architecto ad distinctio ex, est possimus? Assumenda ipsam, optio facere obcaecati aspernatur totam nulla impedit quo accusantium cum quidem perspiciatis rerum id ipsum sapiente sint, repellat iusto explicabo fuga alias, vel cumque deserunt? Eius adipisci eaque earum deserunt voluptate at odit officia veritatis, debitis, natus est laborum suscipit sequi eum minima eveniet pariatur molestiae, corporis quae dicta nulla. Modi voluptatem itaque obcaecati dolore! Sapiente magnam tempora ipsam eveniet repudiandae? Accusamus quod illum amet odio? Optio aliquid vel non dolorem voluptatibus eum atque consequuntur, minima repellendus quas at iusto inventore maiores, eveniet quam enim nulla. Illum odio vero repudiandae nesciunt ullam explicabo nam accusamus voluptas ipsam, dolorum quis earum temporibus quos enim dolorem doloremque placeat veniam! Veritatis iusto magnam a reprehenderit repellendus fugiat voluptas, repellat beatae hic? Deleniti iure fuga hic blanditiis vel, nisi maxime harum delectus fugiat quae rerum quam, quos voluptates sapiente eveniet illo iste tenetur soluta tempore officiis neque ipsum accusantium totam voluptas. Ab, laborum. Quo aspernatur debitis cumque, assumenda, eaque sapiente delectus harum recusandae impedit maxime incidunt illo obcaecati voluptates quae optio. Voluptatibus deleniti nostrum, veniam impedit ipsum quis assumenda molestias aspernatur cum laboriosam. Aliquam voluptas fugit saepe cupiditate dignissimos dolores corporis voluptate dolore in cum, voluptatum nemo voluptatem nihil id explicabo est quasi facilis ducimus repellendus doloribus laborum veritatis, accusamus officiis! Temporibus quas ab modi repellat incidunt optio debitis minus facilis quae amet aperiam aut accusamus nesciunt aliquam aspernatur voluptatem, nulla maiores in iure. Ullam, provident ipsam blanditiis id commodi similique sapiente nihil reiciendis. Vero voluptatibus vel, eligendi laborum explicabo odit provident rerum eveniet neque amet aperiam fuga laboriosam dolores eum, obcaecati voluptates ut placeat iusto, ullam similique beatae magni architecto repellendus. Ratione repellendus quos quod ipsam architecto atque tempore cum quia eligendi ipsum natus ab ipsa pariatur rem laboriosam porro explicabo, nesciunt eius, molestias voluptatem eaque ut aliquid accusantium? Similique autem eos ullam et explicabo architecto assumenda cum ipsum quas est dolore odit ratione delectus facere consequatur maiores voluptas, ipsam quos exercitationem dolor. Quasi quidem minima porro beatae! Libero cupiditate beatae eos neque, aspernatur fugiat totam asperiores architecto ducimus voluptate suscipit in inventore mollitia porro hic eum ea sint tempora dolore earum eligendi laudantium quibusdam labore? Similique voluptate porro sit corrupti soluta aspernatur dignissimos excepturi voluptatibus cumque voluptatem atque ipsum velit quidem ipsa hic fugiat, rerum recusandae! Omnis dolorem in veritatis itaque rem. Velit esse quam saepe sapiente, accusantium provident exercitationem eos! Modi libero dolore adipisci enim, tempora rerum ipsa, ut quibusdam qui explicabo pariatur obcaecati iste inventore fuga asperiores earum. Praesentium officia aspernatur reprehenderit placeat consequuntur pariatur odit sint delectus ex, natus amet quisquam repudiandae labore, eius beatae unde repellat molestiae. Aspernatur iste explicabo excepturi porro quod repudiandae voluptatum rem? Ipsum incidunt laudantium id sunt voluptatem, iusto consequatur dignissimos ipsam, sint, numquam modi! Nam cum soluta quas suscipit modi tenetur reprehenderit harum dolor maxime neque? Ab cupiditate vero deleniti quo dolorem ex veritatis accusantium esse quasi minima laudantium recusandae delectus aliquam, officia aspernatur officiis hic! Sint tempore quasi mollitia reprehenderit odit, tenetur necessitatibus voluptatibus nisi quae, ipsum explicabo fuga alias blanditiis. Soluta corporis modi unde quae culpa voluptatum quibusdam sit, veniam molestiae veritatis aut assumenda nesciunt ipsum voluptatem fugiat obcaecati impedit necessitatibus voluptate! Dicta, ea perspiciatis error illum porro repellat officiis modi laboriosam deleniti numquam maiores veritatis hic libero sequi expedita animi, voluptates ipsum. Neque omnis necessitatibus, tempora ratione quisquam rerum ipsa sunt error expedita optio, ipsum doloribus numquam quasi iusto facilis? Consequatur eaque ipsam impedit odio incidunt dicta iure temporibus modi quas nulla aperiam ab minima fuga deleniti officia enim eos saepe laudantium distinctio eveniet animi omnis, quos, voluptatem sapiente. Ratione reprehenderit asperiores natus ducimus vero quis dolorum libero nam nisi reiciendis? Quae cum, non facilis optio atque facere nisi. Fugit, natus incidunt ratione hic, similique sunt debitis tenetur sequi dolor nostrum numquam vel dolore quod? Provident ex dolor aliquid atque corporis asperiores consequuntur voluptas illum incidunt? Optio quaerat nihil facilis rerum necessitatibus, accusantium expedita quod enim, adipisci laborum laudantium! Doloremque vero cumque minus numquam? Culpa, distinctio. Voluptatem, sunt fugiat. Laborum, eligendi enim saepe quidem mollitia id, dolorem vitae reprehenderit nisi neque, harum ipsam! Doloribus, placeat. Aliquid ipsum provident officia ut fugit odio dolor accusamus amet quo iusto, dicta modi voluptate eos dignissimos saepe temporibus ipsam sit quae accusantium quisquam delectus distinctio sequi reiciendis! Doloribus tempora earum officia, vero nobis molestiae reiciendis! Hic suscipit reiciendis laudantium. In dolore vitae ut explicabo eos cum similique blanditiis ducimus! Explicabo odio at aliquid? Repellat adipisci iure beatae, temporibus saepe delectus dolorum ipsam iusto fugit unde eum incidunt autem impedit facilis et, laudantium ullam pariatur? Odit repellendus iste libero, labore ipsum maiores minima sunt quae culpa porro saepe nihil. Eaque necessitatibus culpa a.</p>
         </div>
      </section>
    </div>
  )
}

export default Services
