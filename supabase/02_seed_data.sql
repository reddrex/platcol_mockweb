-- PLATCOL Seed Data (~35 colocaciones)
-- Ejecutar DESPUÉS de 01_schema.sql en: Supabase > SQL Editor
--
-- Estrategia:
-- 1. Insertar todas las colocaciones con sus datos básicos
-- 2. Insertar ejemplos
-- 3. Insertar traducciones (relaciones bidireccionales entre IDs)
-- 4. Insertar colocaciones relacionadas

-- ─────────────────────────────────────────────────────────────────────────────
-- PASO 1: INSERTAR COLOCACIONES
-- ─────────────────────────────────────────────────────────────────────────────

-- INGLÉS (25 colocaciones)
insert into collocations (id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes) values

('11111111-0001-0000-0000-000000000001', 'en', 'make progress', 'make', 'progress', 'verb + noun',
 'Education & Development', 'B1',
 'To move forward or advance toward a goal; to achieve gradual improvement or development in something.',
 '[{"title":"Common Modifiers","content":"Appears with adjectives indicating degree: significant, steady, rapid, considerable, little, slow progress."},{"title":"Grammatical Patterns","content":"Present continuous (making progress) or present perfect (have made progress) are most common."},{"title":"Learner Tip","content":"Always use make, never do. The noun is always singular: make progress, not make progresses."}]'),

('11111111-0002-0000-0000-000000000001', 'en', 'make a decision', 'make', 'decision', 'verb + noun',
 'General', 'A2',
 'To choose or determine a course of action after considering the available options.',
 '[{"title":"Register","content":"Neutral register, usable in formal and informal contexts."},{"title":"Collocates","content":"Often paired with adjectives: make a difficult, final, or quick decision."},{"title":"Related Verb","content":"decide (verb) = make a decision (collocation). Both are common."}]'),

('11111111-0003-0000-0000-000000000001', 'en', 'take action', 'take', 'action', 'verb + noun',
 'Business & Strategy', 'B1',
 'To do something in response to a situation in order to deal with it or bring about change.',
 '[{"title":"Register","content":"Formal to neutral; common in business, politics, and journalism."},{"title":"Common Extensions","content":"take immediate action, take decisive action, take no action, take legal action."},{"title":"Preposition","content":"take action on / take action against something."}]'),

('11111111-0004-0000-0000-000000000001', 'en', 'pay attention', 'pay', 'attention', 'verb + noun',
 'Education & Development', 'A2',
 'To focus one''s mind on something or someone; to watch or listen carefully.',
 '[{"title":"Preposition","content":"Followed by to: pay attention to the instructions, pay attention to detail."},{"title":"Register","content":"Neutral; used across all contexts from classroom to corporate settings."},{"title":"Learner Tip","content":"pay attention (active focus) vs. draw attention (cause others to notice) — different meanings."}]'),

('11111111-0005-0000-0000-000000000001', 'en', 'reach a conclusion', 'reach', 'conclusion', 'verb + noun',
 'Academic & Research', 'B2',
 'To arrive at a final judgment or determination after reasoning through evidence or arguments.',
 '[{"title":"Academic Context","content":"Extremely common in academic and scientific writing."},{"title":"Alternatives","content":"draw a conclusion (same meaning, slightly more formal); come to a conclusion (slightly less formal)."},{"title":"Preposition","content":"reach the conclusion that + clause is very common."}]'),

('11111111-0006-0000-0000-000000000001', 'en', 'gain experience', 'gain', 'experience', 'verb + noun',
 'Professional Development', 'B1',
 'To acquire knowledge, skills, or familiarity through practice, exposure, or participation.',
 '[{"title":"Common Contexts","content":"Job applications, CVs, career development writing."},{"title":"Collocates","content":"gain valuable experience, gain hands-on experience, gain work experience, gain practical experience."},{"title":"Alternatives","content":"acquire experience (more formal), get experience (informal)."}]'),

('11111111-0007-0000-0000-000000000001', 'en', 'conduct research', 'conduct', 'research', 'verb + noun',
 'Academic & Research', 'C1',
 'To carry out a systematic investigation into a subject in order to discover facts or reach new conclusions.',
 '[{"title":"Register","content":"Formal and academic; do research is used in informal speech."},{"title":"Prepositions","content":"conduct research into, conduct research on."},{"title":"Alternatives","content":"carry out research, undertake research (formal), do research (informal)."}]'),

('11111111-0008-0000-0000-000000000001', 'en', 'express concern', 'express', 'concern', 'verb + noun',
 'Communication', 'B2',
 'To communicate or voice worry, unease, or anxiety about a particular situation or issue.',
 '[{"title":"Register","content":"Formal; appears frequently in diplomatic language, official statements, and journalism."},{"title":"Variants","content":"raise concerns (slightly stronger), voice concerns, air concerns."},{"title":"Preposition","content":"express concern about / over something."}]'),

('11111111-0009-0000-0000-000000000001', 'en', 'take responsibility', 'take', 'responsibility', 'verb + noun',
 'Business & Strategy', 'B2',
 'To accept accountability or ownership for one''s actions, decisions, or their consequences.',
 '[{"title":"Register","content":"Formal to neutral; very common in professional and ethical contexts."},{"title":"Prepositions","content":"take responsibility for something."},{"title":"Related","content":"assume responsibility (more formal), bear responsibility (formal/written)."}]'),

('11111111-0010-0000-0000-000000000001', 'en', 'draw attention', 'draw', 'attention', 'verb + noun',
 'Communication', 'B2',
 'To cause people to notice or focus on something or someone.',
 '[{"title":"Preposition","content":"draw attention to: She drew attention to the flaw in the argument."},{"title":"Contrast","content":"pay attention = focus actively; draw attention = cause others to notice."},{"title":"Register","content":"Neutral to formal; common in journalism, academia, and professional writing."}]'),

('11111111-0011-0000-0000-000000000001', 'en', 'raise awareness', 'raise', 'awareness', 'verb + noun',
 'Communication', 'B2',
 'To increase people''s knowledge or understanding of a particular issue or subject.',
 '[{"title":"Common Contexts","content":"Social causes, health campaigns, environmental issues, education."},{"title":"Collocates","content":"raise awareness of / about something."},{"title":"Alternatives","content":"increase awareness, promote awareness, spread awareness."}]'),

('11111111-0012-0000-0000-000000000001', 'en', 'meet a deadline', 'meet', 'deadline', 'verb + noun',
 'Business & Strategy', 'B1',
 'To complete a task or deliver something by the required or agreed time.',
 '[{"title":"Register","content":"Common in professional and academic contexts."},{"title":"Opposites","content":"miss a deadline (fail to complete on time), extend a deadline (move it later)."},{"title":"Common Modifiers","content":"tight deadline, strict deadline, upcoming deadline."}]'),

('11111111-0013-0000-0000-000000000001', 'en', 'set a goal', 'set', 'goal', 'verb + noun',
 'Education & Development', 'B1',
 'To decide on and establish a specific objective or target that one aims to achieve.',
 '[{"title":"Collocates","content":"set clear goals, set realistic goals, set ambitious goals, set long-term goals."},{"title":"Related","content":"achieve a goal (reach it), pursue a goal (work toward it), abandon a goal (give up on it)."},{"title":"Register","content":"Common in personal development, business strategy, sports, and education."}]'),

('11111111-0014-0000-0000-000000000001', 'en', 'achieve a goal', 'achieve', 'goal', 'verb + noun',
 'Education & Development', 'B1',
 'To successfully reach or accomplish a previously set objective or target.',
 '[{"title":"Synonyms","content":"reach a goal, accomplish a goal, attain a goal (formal)."},{"title":"Common Pattern","content":"Often paired with set: first set a goal, then achieve it."},{"title":"Register","content":"Neutral; very common in CV writing, self-help, and academic contexts."}]'),

('11111111-0015-0000-0000-000000000001', 'en', 'overcome challenges', 'overcome', 'challenges', 'verb + noun',
 'General', 'B2',
 'To successfully deal with or surmount difficulties, obstacles, or problems.',
 '[{"title":"Register","content":"Motivational and professional contexts; common in personal statements and cover letters."},{"title":"Alternatives","content":"face challenges (encounter them), address challenges (deal with them), tackle challenges (informal)."},{"title":"Collocates","content":"overcome significant challenges, overcome adversity, overcome obstacles."}]'),

('11111111-0016-0000-0000-000000000001', 'en', 'provide support', 'provide', 'support', 'verb + noun',
 'General', 'B1',
 'To give assistance, help, or resources to someone who needs them.',
 '[{"title":"Preposition","content":"provide support for / to someone."},{"title":"Types","content":"emotional support, financial support, technical support, moral support."},{"title":"Register","content":"Formal to neutral; common in healthcare, social services, and business."}]'),

('11111111-0017-0000-0000-000000000001', 'en', 'make an effort', 'make', 'effort', 'verb + noun',
 'General', 'A2',
 'To try hard or put in energy and determination to do something, especially something difficult.',
 '[{"title":"Collocates","content":"make a great effort, make a conscious effort, make every effort."},{"title":"Learner Tip","content":"Always use make, never do. Compare: make an effort (try hard) vs. make progress (advance)."},{"title":"Register","content":"Neutral; used in both informal and formal contexts."}]'),

('11111111-0018-0000-0000-000000000001', 'en', 'take a risk', 'take', 'risk', 'verb + noun',
 'Business & Strategy', 'B1',
 'To do something that involves the possibility of danger, loss, or negative consequences.',
 '[{"title":"Collocates","content":"take a calculated risk, take unnecessary risks, take a big risk."},{"title":"Preposition","content":"take a risk by doing something."},{"title":"Related","content":"run a risk (more formal), risk + verb-ing (e.g. risk losing)."}]'),

('11111111-0019-0000-0000-000000000001', 'en', 'reach an agreement', 'reach', 'agreement', 'verb + noun',
 'Business & Strategy', 'B2',
 'To successfully come to a shared understanding or settle a dispute after discussion or negotiation.',
 '[{"title":"Context","content":"Business negotiations, diplomacy, legal disputes, international relations."},{"title":"Alternatives","content":"come to an agreement, strike a deal (informal), conclude an agreement (formal)."},{"title":"Preposition","content":"reach an agreement on / about something; reach an agreement with someone."}]'),

('11111111-0020-0000-0000-000000000001', 'en', 'seek advice', 'seek', 'advice', 'verb + noun',
 'General', 'B2',
 'To actively look for or request guidance, recommendations, or opinions from others.',
 '[{"title":"Register","content":"Formal; do not confuse with advise (verb) or advices (incorrect plural)."},{"title":"Preposition","content":"seek advice from someone; seek advice on / about something."},{"title":"Alternatives","content":"ask for advice (neutral), consult (formal), get a second opinion."}]'),

('11111111-0021-0000-0000-000000000001', 'en', 'build confidence', 'build', 'confidence', 'verb + noun',
 'Education & Development', 'B1',
 'To gradually develop greater self-assurance, belief in one''s abilities, or trust in someone or something.',
 '[{"title":"Collocates","content":"build self-confidence, build confidence in oneself, build confidence among team members."},{"title":"Process","content":"Usually implies a gradual process: build (over time) vs. gain confidence (acquire some amount)."},{"title":"Register","content":"Common in education, psychology, coaching, and HR contexts."}]'),

('11111111-0022-0000-0000-000000000001', 'en', 'face consequences', 'face', 'consequences', 'verb + noun',
 'General', 'B2',
 'To deal with or accept the results or effects of one''s actions, especially when they are negative.',
 '[{"title":"Register","content":"Neutral to formal; common in educational, legal, and ethical contexts."},{"title":"Collocates","content":"face serious consequences, face the consequences of your actions."},{"title":"Alternatives","content":"bear the consequences (more formal), suffer the consequences (implies pain/loss), deal with the fallout (informal)."}]'),

('11111111-0023-0000-0000-000000000001', 'en', 'deliver a speech', 'deliver', 'speech', 'verb + noun',
 'Communication', 'B2',
 'To give a formal address or presentation to an audience.',
 '[{"title":"Register","content":"Formal; give a speech is the more common alternative in neutral and informal contexts."},{"title":"Collocates","content":"deliver a powerful speech, deliver a keynote speech."},{"title":"Context","content":"Common in political, academic, and ceremonial contexts."}]'),

('11111111-0024-0000-0000-000000000001', 'en', 'submit a report', 'submit', 'report', 'verb + noun',
 'Business & Strategy', 'B2',
 'To formally present or send a written document containing findings, information, or analysis to an authority or organization.',
 '[{"title":"Register","content":"Formal; used in academic, legal, corporate, and government contexts."},{"title":"Preposition","content":"submit a report to someone; submit a report on something."},{"title":"Deadlines","content":"Often used together with meet a deadline: submit the report before the deadline."}]'),

('11111111-0025-0000-0000-000000000001', 'en', 'carry out a task', 'carry out', 'task', 'phrasal verb + noun',
 'Business & Strategy', 'B1',
 'To perform, complete, or execute a specific piece of work or assignment.',
 '[{"title":"Alternatives","content":"perform a task (formal), complete a task, execute a task (technical)."},{"title":"Note","content":"carry out is a phrasal verb; it can also collocate with carry out an investigation, carry out a plan, carry out research."},{"title":"Register","content":"Formal to neutral."}]');


-- ESPAÑOL (5 colocaciones)
insert into collocations (id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes) values

('22222222-0001-0000-0000-000000000001', 'es', 'hacer progresos', 'hacer', 'progresos', 'verbo + sustantivo',
 'Educación y Desarrollo', 'B1',
 'Avanzar o desarrollarse de manera gradual hacia un objetivo; mejorar progresivamente en algo.',
 '[{"title":"Modificadores comunes","content":"hacer grandes progresos, hacer progresos significativos, hacer pocos progresos."},{"title":"Nota gramatical","content":"En español se usa el plural progresos con más frecuencia que en inglés (donde progress es incontable)."},{"title":"Consejo","content":"Equivale a avanzar o progresar en contextos más informales."}]'),

('22222222-0002-0000-0000-000000000001', 'es', 'tomar una decisión', 'tomar', 'decisión', 'verbo + sustantivo',
 'General', 'A2',
 'Elegir o determinar un curso de acción tras considerar las opciones disponibles.',
 '[{"title":"Registro","content":"Neutro; utilizable en contextos formales e informales."},{"title":"Colocados frecuentes","content":"tomar una decisión difícil, tomar una decisión definitiva, tomar una decisión rápida."},{"title":"Alternativas","content":"adoptar una decisión (más formal), llegar a una decisión."}]'),

('22222222-0003-0000-0000-000000000001', 'es', 'prestar atención', 'prestar', 'atención', 'verbo + sustantivo',
 'Educación y Desarrollo', 'A2',
 'Concentrar la mente en algo o alguien; escuchar o mirar con cuidado.',
 '[{"title":"Preposición","content":"Seguido de a: prestar atención a las instrucciones, prestar atención al detalle."},{"title":"Registro","content":"Neutro; de uso frecuente en contextos escolares, laborales y cotidianos."},{"title":"Contraste","content":"prestar atención (foco activo) vs. llamar la atención (hacer que otros noten algo)."}]'),

('22222222-0004-0000-0000-000000000001', 'es', 'llevar a cabo', 'llevar', 'cabo', 'frase verbal',
 'Estrategia y Negocios', 'B1',
 'Realizar, ejecutar o completar una tarea, plan, proyecto o investigación.',
 '[{"title":"Registro","content":"Formal a neutro; muy frecuente en textos académicos y profesionales."},{"title":"Colocados frecuentes","content":"llevar a cabo una investigación, llevar a cabo un proyecto, llevar a cabo un plan."},{"title":"Equivalentes","content":"realizar, ejecutar, desarrollar (según el contexto)."}]'),

('22222222-0005-0000-0000-000000000001', 'es', 'asumir la responsabilidad', 'asumir', 'responsabilidad', 'verbo + sustantivo',
 'Estrategia y Negocios', 'B2',
 'Aceptar la culpa o la obligación por las propias acciones, decisiones o sus consecuencias.',
 '[{"title":"Registro","content":"Formal a neutro; muy común en contextos profesionales y éticos."},{"title":"Preposición","content":"asumir la responsabilidad de algo."},{"title":"Variantes","content":"hacerse responsable de (más neutro), cargar con la responsabilidad (expresivo)."}]');


-- PORTUGUÉS (3 colocaciones)
insert into collocations (id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes) values

('33333333-0001-0000-0000-000000000001', 'pt', 'fazer progressos', 'fazer', 'progressos', 'verbo + substantivo',
 'Educação e Desenvolvimento', 'B1',
 'Avançar ou desenvolver-se gradualmente em direção a um objetivo; melhorar progressivamente em algo.',
 '[{"title":"Modificadores comuns","content":"fazer grandes progressos, fazer progressos significativos, fazer poucos progressos."},{"title":"Nota gramatical","content":"Em português usa-se o plural progressos; o singular progresso também é possível mas menos frequente nesta colocação."}]'),

('33333333-0002-0000-0000-000000000001', 'pt', 'tomar uma decisão', 'tomar', 'decisão', 'verbo + substantivo',
 'Geral', 'A2',
 'Escolher ou determinar um curso de ação após considerar as opções disponíveis.',
 '[{"title":"Registro","content":"Neutro; utilizável em contextos formais e informais."},{"title":"Colocados frequentes","content":"tomar uma decisão difícil, tomar uma decisão final, tomar uma decisão rápida."}]'),

('33333333-0003-0000-0000-000000000001', 'pt', 'prestar atenção', 'prestar', 'atenção', 'verbo + substantivo',
 'Educação e Desenvolvimento', 'A2',
 'Concentrar a mente em algo ou alguém; ouvir ou observar com cuidado.',
 '[{"title":"Preposição","content":"Seguido de a: prestar atenção às instruções, prestar atenção ao detalhe."},{"title":"Registro","content":"Neutro; de uso frequente em contextos escolares, profissionais e quotidianos."}]');


-- FRANCÊS (3 colocaciones)
insert into collocations (id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes) values

('44444444-0001-0000-0000-000000000001', 'fr', 'faire des progrès', 'faire', 'progrès', 'verbe + nom',
 'Éducation et développement', 'B1',
 'Avancer ou se développer progressivement vers un objectif ; s''améliorer graduellement dans quelque chose.',
 '[{"title":"Modificateurs courants","content":"faire de grands progrès, faire des progrès significatifs, faire peu de progrès."},{"title":"Note grammaticale","content":"Toujours au pluriel dans cette construction : des progrès, jamais un progrès seul."}]'),

('44444444-0002-0000-0000-000000000001', 'fr', 'prendre une décision', 'prendre', 'décision', 'verbe + nom',
 'Général', 'A2',
 'Choisir ou déterminer une ligne d''action après avoir examiné les options disponibles.',
 '[{"title":"Registre","content":"Neutre ; utilisable dans des contextes formels et informels."},{"title":"Collocatifs fréquents","content":"prendre une décision difficile, prendre une décision finale, prendre une décision rapide."}]'),

('44444444-0003-0000-0000-000000000001', 'fr', 'faire attention', 'faire', 'attention', 'verbe + nom',
 'Éducation et développement', 'A2',
 'Concentrer son esprit sur quelque chose ou quelqu''un ; écouter ou regarder attentivement.',
 '[{"title":"Préposition","content":"Suivi de à : faire attention aux instructions, faire attention aux détails."},{"title":"Registre","content":"Neutre ; fréquent dans tous les contextes, de la salle de classe aux réunions professionnelles."}]');


-- CHINO MANDARÍN (2 colocaciones)
insert into collocations (id, language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes) values

('55555555-0001-0000-0000-000000000001', 'zh', '取得进步', '取得', '进步', '动词 + 名词',
 '教育与发展', 'B1',
 '在某一目标上逐步前进或发展；在某事上持续改进。',
 '[{"title":"常用搭配","content":"取得显著进步、取得一定进步、取得很大进步。"},{"title":"语法说明","content":"通常不可数，不说\"一个进步\"；可用\"有所进步\"或\"取得进步\"表达。"}]'),

('55555555-0002-0000-0000-000000000001', 'zh', '做决定', '做', '决定', '动词 + 名词',
 '综合', 'A2',
 '在考虑了各种选项后，选择或确定一个行动方向。',
 '[{"title":"语体","content":"中性，适用于正式和非正式场合。"},{"title":"常见搭配","content":"做出决定、做最终决定、做快速决定。"}]');


-- ─────────────────────────────────────────────────────────────────────────────
-- PASO 2: INSERTAR EJEMPLOS
-- ─────────────────────────────────────────────────────────────────────────────

insert into examples (collocation_id, sentence, sort_order) values
-- make progress
('11111111-0001-0000-0000-000000000001', 'The research team has made significant progress in understanding the disease mechanism.', 1),
('11111111-0001-0000-0000-000000000001', 'We need to make more progress on this project before the deadline.', 2),
('11111111-0001-0000-0000-000000000001', 'She is making good progress in learning Spanish after just three months.', 3),
('11111111-0001-0000-0000-000000000001', 'Despite the challenges, they made steady progress throughout the winter.', 4),
('11111111-0001-0000-0000-000000000001', 'The patient is making excellent progress in their recovery.', 5),

-- make a decision
('11111111-0002-0000-0000-000000000001', 'The board needs to make a decision by Friday.', 1),
('11111111-0002-0000-0000-000000000001', 'It was the hardest decision she ever had to make.', 2),
('11111111-0002-0000-0000-000000000001', 'We made a decision to relocate the office after months of discussion.', 3),
('11111111-0002-0000-0000-000000000001', 'You cannot keep postponing — you need to make a decision now.', 4),

-- take action
('11111111-0003-0000-0000-000000000001', 'The government must take action to address climate change.', 1),
('11111111-0003-0000-0000-000000000001', 'We cannot wait any longer — we need to take action now.', 2),
('11111111-0003-0000-0000-000000000001', 'The company took swift action to resolve the data breach.', 3),
('11111111-0003-0000-0000-000000000001', 'Failure to take action could result in serious consequences.', 4),

-- pay attention
('11111111-0004-0000-0000-000000000001', 'Please pay attention to the safety instructions before departure.', 1),
('11111111-0004-0000-0000-000000000001', 'She paid careful attention to every detail of the design.', 2),
('11111111-0004-0000-0000-000000000001', 'The students were not paying attention during the lecture.', 3),
('11111111-0004-0000-0000-000000000001', 'If you pay attention to the context, the meaning becomes clear.', 4),

-- reach a conclusion
('11111111-0005-0000-0000-000000000001', 'After months of study, the researchers reached the conclusion that the drug was effective.', 1),
('11111111-0005-0000-0000-000000000001', 'The jury reached a conclusion after three days of deliberation.', 2),
('11111111-0005-0000-0000-000000000001', 'It is too early to reach any conclusion about the cause of the accident.', 3),
('11111111-0005-0000-0000-000000000001', 'We reached the conclusion that a complete redesign was necessary.', 4),

-- gain experience
('11111111-0006-0000-0000-000000000001', 'She spent a year abroad to gain experience in international business.', 1),
('11111111-0006-0000-0000-000000000001', 'Internships are a great way to gain hands-on experience before graduation.', 2),
('11111111-0006-0000-0000-000000000001', 'He gained valuable experience working with a range of clients across different industries.', 3),

-- conduct research
('11111111-0007-0000-0000-000000000001', 'The university is conducting research into the effects of diet on mental health.', 1),
('11111111-0007-0000-0000-000000000001', 'She has been conducting research on migratory patterns for over a decade.', 2),
('11111111-0007-0000-0000-000000000001', 'We need additional funding to continue conducting this vital research.', 3),
('11111111-0007-0000-0000-000000000001', 'The team conducted research across five countries over three years.', 4),

-- express concern
('11111111-0008-0000-0000-000000000001', 'Several members of the committee expressed concern about the proposed budget cuts.', 1),
('11111111-0008-0000-0000-000000000001', 'The WHO expressed serious concern over the rising number of infections.', 2),
('11111111-0008-0000-0000-000000000001', 'Parents have expressed concern about the level of homework assigned to young children.', 3),

-- take responsibility
('11111111-0009-0000-0000-000000000001', 'The CEO took full responsibility for the company''s failure to comply with the regulations.', 1),
('11111111-0009-0000-0000-000000000001', 'You must take responsibility for your own decisions and their consequences.', 2),
('11111111-0009-0000-0000-000000000001', 'Nobody on the team was willing to take responsibility for the error.', 3),

-- draw attention
('11111111-0010-0000-0000-000000000001', 'The report drew attention to the significant inequality in healthcare access.', 1),
('11111111-0010-0000-0000-000000000001', 'Bright colors drew the children''s attention to the interactive display.', 2),
('11111111-0010-0000-0000-000000000001', 'She did not want to draw attention to herself during the meeting.', 3),

-- raise awareness
('11111111-0011-0000-0000-000000000001', 'The campaign aims to raise awareness about the dangers of plastic pollution.', 1),
('11111111-0011-0000-0000-000000000001', 'The documentary raised awareness of the living conditions in remote areas.', 2),
('11111111-0011-0000-0000-000000000001', 'Social media has become a powerful tool to raise awareness about social issues.', 3),

-- meet a deadline
('11111111-0012-0000-0000-000000000001', 'The team worked overtime to meet the deadline for the product launch.', 1),
('11111111-0012-0000-0000-000000000001', 'It is essential that all contributors meet the submission deadline.', 2),
('11111111-0012-0000-0000-000000000001', 'She has never failed to meet a deadline in her entire career.', 3),

-- set a goal
('11111111-0013-0000-0000-000000000001', 'At the beginning of each semester, students are encouraged to set clear academic goals.', 1),
('11111111-0013-0000-0000-000000000001', 'The company set ambitious goals for expanding into new markets.', 2),
('11111111-0013-0000-0000-000000000001', 'It helps to set specific, measurable goals rather than vague intentions.', 3),

-- achieve a goal
('11111111-0014-0000-0000-000000000001', 'She finally achieved her long-term goal of becoming a published author.', 1),
('11111111-0014-0000-0000-000000000001', 'The team achieved their goal of reducing carbon emissions by 30% within two years.', 2),
('11111111-0014-0000-0000-000000000001', 'With persistence and hard work, anyone can achieve their goals.', 3),

-- overcome challenges
('11111111-0015-0000-0000-000000000001', 'The expedition team had to overcome numerous challenges to reach the summit.', 1),
('11111111-0015-0000-0000-000000000001', 'Entrepreneurs must be prepared to overcome challenges at every stage of growth.', 2),
('11111111-0015-0000-0000-000000000001', 'She overcame significant personal challenges to complete her doctoral thesis.', 3),

-- provide support
('11111111-0016-0000-0000-000000000001', 'The organization provides financial support to families affected by the crisis.', 1),
('11111111-0016-0000-0000-000000000001', 'Teachers are trained to provide emotional support to students in distress.', 2),
('11111111-0016-0000-0000-000000000001', 'The helpline provides support 24 hours a day, seven days a week.', 3),

-- make an effort
('11111111-0017-0000-0000-000000000001', 'You should make an effort to arrive on time for the meeting.', 1),
('11111111-0017-0000-0000-000000000001', 'She made a great effort to learn the local language before moving abroad.', 2),
('11111111-0017-0000-0000-000000000001', 'At least he made an effort — the result was not perfect, but the intention was clear.', 3),

-- take a risk
('11111111-0018-0000-0000-000000000001', 'Starting a business always involves taking a risk.', 1),
('11111111-0018-0000-0000-000000000001', 'He decided to take a calculated risk and invest all his savings in the project.', 2),
('11111111-0018-0000-0000-000000000001', 'She was not willing to take unnecessary risks with her health.', 3),

-- reach an agreement
('11111111-0019-0000-0000-000000000001', 'After lengthy negotiations, the two sides finally reached an agreement.', 1),
('11111111-0019-0000-0000-000000000001', 'The union and management reached an agreement on the new wage structure.', 2),
('11111111-0019-0000-0000-000000000001', 'We need to reach an agreement before the contract expires.', 3),

-- seek advice
('11111111-0020-0000-0000-000000000001', 'I strongly recommend seeking legal advice before signing the contract.', 1),
('11111111-0020-0000-0000-000000000001', 'She sought advice from several experts before making her final decision.', 2),
('11111111-0020-0000-0000-000000000001', 'Do not hesitate to seek advice if you are unsure about the regulations.', 3),

-- build confidence
('11111111-0021-0000-0000-000000000001', 'Performing in public is one of the best ways to build confidence.', 1),
('11111111-0021-0000-0000-000000000001', 'The coaching program is designed to help young athletes build confidence in their abilities.', 2),
('11111111-0021-0000-0000-000000000001', 'Small successes help build confidence over time.', 3),

-- face consequences
('11111111-0022-0000-0000-000000000001', 'Those who violate the rules will face serious consequences.', 1),
('11111111-0022-0000-0000-000000000001', 'She knew she would have to face the consequences of her decision eventually.', 2),
('11111111-0022-0000-0000-000000000001', 'The company faced significant financial consequences following the scandal.', 3),

-- deliver a speech
('11111111-0023-0000-0000-000000000001', 'The president delivered a powerful speech on the importance of unity.', 1),
('11111111-0023-0000-0000-000000000001', 'She delivered her speech with remarkable confidence and clarity.', 2),
('11111111-0023-0000-0000-000000000001', 'He had been asked to deliver a keynote speech at the international conference.', 3),

-- submit a report
('11111111-0024-0000-0000-000000000001', 'All teams must submit their reports by the end of the month.', 1),
('11111111-0024-0000-0000-000000000001', 'She submitted a detailed report on the findings of the field study.', 2),
('11111111-0024-0000-0000-000000000001', 'The committee submitted a report to the board recommending immediate action.', 3),

-- carry out a task
('11111111-0025-0000-0000-000000000001', 'The soldiers were ordered to carry out a difficult and dangerous task.', 1),
('11111111-0025-0000-0000-000000000001', 'She efficiently carried out all the tasks assigned to her during the project.', 2),
('11111111-0025-0000-0000-000000000001', 'The robot is programmed to carry out repetitive tasks with high precision.', 3),

-- hacer progresos (ES)
('22222222-0001-0000-0000-000000000001', 'El equipo de investigación ha hecho grandes progresos en el tratamiento de la enfermedad.', 1),
('22222222-0001-0000-0000-000000000001', 'Necesitamos hacer más progresos en este proyecto antes de la fecha límite.', 2),
('22222222-0001-0000-0000-000000000001', 'Está haciendo buenos progresos en el aprendizaje del inglés.', 3),

-- tomar una decisión (ES)
('22222222-0002-0000-0000-000000000001', 'La junta necesita tomar una decisión antes del viernes.', 1),
('22222222-0002-0000-0000-000000000001', 'Fue la decisión más difícil que jamás tuvo que tomar.', 2),
('22222222-0002-0000-0000-000000000001', 'Tomamos la decisión de trasladar la oficina tras meses de debate.', 3),

-- prestar atención (ES)
('22222222-0003-0000-0000-000000000001', 'Por favor, presta atención a las instrucciones de seguridad antes de comenzar.', 1),
('22222222-0003-0000-0000-000000000001', 'Prestó especial atención a cada detalle del diseño.', 2),
('22222222-0003-0000-0000-000000000001', 'Los estudiantes no prestaban atención durante la conferencia.', 3),

-- llevar a cabo (ES)
('22222222-0004-0000-0000-000000000001', 'El gobierno debe llevar a cabo las reformas prometidas durante la campaña.', 1),
('22222222-0004-0000-0000-000000000001', 'El equipo llevó a cabo una investigación exhaustiva sobre el tema.', 2),
('22222222-0004-0000-0000-000000000001', 'Es importante llevar a cabo un análisis detallado antes de tomar decisiones.', 3),

-- asumir la responsabilidad (ES)
('22222222-0005-0000-0000-000000000001', 'El director asumió la plena responsabilidad por el fracaso del proyecto.', 1),
('22222222-0005-0000-0000-000000000001', 'Debes asumir la responsabilidad de tus propias decisiones.', 2),
('22222222-0005-0000-0000-000000000001', 'Nadie en el equipo quiso asumir la responsabilidad del error.', 3),

-- fazer progressos (PT)
('33333333-0001-0000-0000-000000000001', 'A equipa de investigação fez grandes progressos no tratamento da doença.', 1),
('33333333-0001-0000-0000-000000000001', 'É necessário fazer mais progressos neste projeto antes do prazo.', 2),
('33333333-0001-0000-0000-000000000001', 'Ela está a fazer bons progressos na aprendizagem do inglês.', 3),

-- tomar uma decisão (PT)
('33333333-0002-0000-0000-000000000001', 'A diretoria precisa tomar uma decisão antes de sexta-feira.', 1),
('33333333-0002-0000-0000-000000000001', 'Foi a decisão mais difícil que ela já teve de tomar.', 2),
('33333333-0002-0000-0000-000000000001', 'Tomámos a decisão de mudar o escritório após meses de discussão.', 3),

-- prestar atenção (PT)
('33333333-0003-0000-0000-000000000001', 'Por favor, preste atenção às instruções de segurança antes de começar.', 1),
('33333333-0003-0000-0000-000000000001', 'Ela prestou especial atenção a cada detalhe do design.', 2),
('33333333-0003-0000-0000-000000000001', 'Os estudantes não estavam a prestar atenção durante a conferência.', 3),

-- faire des progrès (FR)
('44444444-0001-0000-0000-000000000001', 'L''équipe de recherche a fait de grands progrès dans la compréhension du mécanisme de la maladie.', 1),
('44444444-0001-0000-0000-000000000001', 'Nous devons faire davantage de progrès sur ce projet avant l''échéance.', 2),
('44444444-0001-0000-0000-000000000001', 'Elle fait de bons progrès en espagnol après seulement trois mois.', 3),

-- prendre une décision (FR)
('44444444-0002-0000-0000-000000000001', 'Le conseil doit prendre une décision avant vendredi.', 1),
('44444444-0002-0000-0000-000000000001', 'C''était la décision la plus difficile qu''elle ait jamais eu à prendre.', 2),
('44444444-0002-0000-0000-000000000001', 'Nous avons pris la décision de déménager le bureau après des mois de débat.', 3),

-- faire attention (FR)
('44444444-0003-0000-0000-000000000001', 'Veuillez faire attention aux consignes de sécurité avant de commencer.', 1),
('44444444-0003-0000-0000-000000000001', 'Elle a fait très attention à chaque détail du design.', 2),
('44444444-0003-0000-0000-000000000001', 'Les étudiants ne faisaient pas attention pendant la conférence.', 3),

-- 取得进步 (ZH)
('55555555-0001-0000-0000-000000000001', '研究团队在理解该疾病的发病机制方面取得了显著进步。', 1),
('55555555-0001-0000-0000-000000000001', '在截止日期之前，我们需要在这个项目上取得更多进步。', 2),
('55555555-0001-0000-0000-000000000001', '她学习西班牙语仅三个月，就取得了很好的进步。', 3),

-- 做决定 (ZH)
('55555555-0002-0000-0000-000000000001', '董事会需要在星期五之前做决定。', 1),
('55555555-0002-0000-0000-000000000001', '这是她有生以来必须做的最难的决定。', 2),
('55555555-0002-0000-0000-000000000001', '经过数月讨论，我们做出了将办公室迁往新址的决定。', 3);


-- ─────────────────────────────────────────────────────────────────────────────
-- PASO 3: TRADUCCIONES (relaciones bidireccionales)
-- Para cada par (A, B), insertar tanto A→B como B→A
-- ─────────────────────────────────────────────────────────────────────────────

insert into collocation_translations (source_id, target_id) values
-- make progress ↔ hacer progresos ↔ fazer progressos ↔ faire des progrès ↔ 取得进步
('11111111-0001-0000-0000-000000000001', '22222222-0001-0000-0000-000000000001'),
('22222222-0001-0000-0000-000000000001', '11111111-0001-0000-0000-000000000001'),
('11111111-0001-0000-0000-000000000001', '33333333-0001-0000-0000-000000000001'),
('33333333-0001-0000-0000-000000000001', '11111111-0001-0000-0000-000000000001'),
('11111111-0001-0000-0000-000000000001', '44444444-0001-0000-0000-000000000001'),
('44444444-0001-0000-0000-000000000001', '11111111-0001-0000-0000-000000000001'),
('11111111-0001-0000-0000-000000000001', '55555555-0001-0000-0000-000000000001'),
('55555555-0001-0000-0000-000000000001', '11111111-0001-0000-0000-000000000001'),
-- entre idiomas no ingleses (make progress)
('22222222-0001-0000-0000-000000000001', '33333333-0001-0000-0000-000000000001'),
('33333333-0001-0000-0000-000000000001', '22222222-0001-0000-0000-000000000001'),
('22222222-0001-0000-0000-000000000001', '44444444-0001-0000-0000-000000000001'),
('44444444-0001-0000-0000-000000000001', '22222222-0001-0000-0000-000000000001'),
('22222222-0001-0000-0000-000000000001', '55555555-0001-0000-0000-000000000001'),
('55555555-0001-0000-0000-000000000001', '22222222-0001-0000-0000-000000000001'),
('33333333-0001-0000-0000-000000000001', '44444444-0001-0000-0000-000000000001'),
('44444444-0001-0000-0000-000000000001', '33333333-0001-0000-0000-000000000001'),
('33333333-0001-0000-0000-000000000001', '55555555-0001-0000-0000-000000000001'),
('55555555-0001-0000-0000-000000000001', '33333333-0001-0000-0000-000000000001'),
('44444444-0001-0000-0000-000000000001', '55555555-0001-0000-0000-000000000001'),
('55555555-0001-0000-0000-000000000001', '44444444-0001-0000-0000-000000000001'),

-- make a decision ↔ tomar una decisión ↔ tomar uma decisão ↔ prendre une décision ↔ 做决定
('11111111-0002-0000-0000-000000000001', '22222222-0002-0000-0000-000000000001'),
('22222222-0002-0000-0000-000000000001', '11111111-0002-0000-0000-000000000001'),
('11111111-0002-0000-0000-000000000001', '33333333-0002-0000-0000-000000000001'),
('33333333-0002-0000-0000-000000000001', '11111111-0002-0000-0000-000000000001'),
('11111111-0002-0000-0000-000000000001', '44444444-0002-0000-0000-000000000001'),
('44444444-0002-0000-0000-000000000001', '11111111-0002-0000-0000-000000000001'),
('11111111-0002-0000-0000-000000000001', '55555555-0002-0000-0000-000000000001'),
('55555555-0002-0000-0000-000000000001', '11111111-0002-0000-0000-000000000001'),
('22222222-0002-0000-0000-000000000001', '33333333-0002-0000-0000-000000000001'),
('33333333-0002-0000-0000-000000000001', '22222222-0002-0000-0000-000000000001'),
('22222222-0002-0000-0000-000000000001', '44444444-0002-0000-0000-000000000001'),
('44444444-0002-0000-0000-000000000001', '22222222-0002-0000-0000-000000000001'),
('22222222-0002-0000-0000-000000000001', '55555555-0002-0000-0000-000000000001'),
('55555555-0002-0000-0000-000000000001', '22222222-0002-0000-0000-000000000001'),
('33333333-0002-0000-0000-000000000001', '44444444-0002-0000-0000-000000000001'),
('44444444-0002-0000-0000-000000000001', '33333333-0002-0000-0000-000000000001'),
('33333333-0002-0000-0000-000000000001', '55555555-0002-0000-0000-000000000001'),
('55555555-0002-0000-0000-000000000001', '33333333-0002-0000-0000-000000000001'),
('44444444-0002-0000-0000-000000000001', '55555555-0002-0000-0000-000000000001'),
('55555555-0002-0000-0000-000000000001', '44444444-0002-0000-0000-000000000001'),

-- pay attention ↔ prestar atención ↔ prestar atenção ↔ faire attention
('11111111-0004-0000-0000-000000000001', '22222222-0003-0000-0000-000000000001'),
('22222222-0003-0000-0000-000000000001', '11111111-0004-0000-0000-000000000001'),
('11111111-0004-0000-0000-000000000001', '33333333-0003-0000-0000-000000000001'),
('33333333-0003-0000-0000-000000000001', '11111111-0004-0000-0000-000000000001'),
('11111111-0004-0000-0000-000000000001', '44444444-0003-0000-0000-000000000001'),
('44444444-0003-0000-0000-000000000001', '11111111-0004-0000-0000-000000000001'),
('22222222-0003-0000-0000-000000000001', '33333333-0003-0000-0000-000000000001'),
('33333333-0003-0000-0000-000000000001', '22222222-0003-0000-0000-000000000001'),
('22222222-0003-0000-0000-000000000001', '44444444-0003-0000-0000-000000000001'),
('44444444-0003-0000-0000-000000000001', '22222222-0003-0000-0000-000000000001'),
('33333333-0003-0000-0000-000000000001', '44444444-0003-0000-0000-000000000001'),
('44444444-0003-0000-0000-000000000001', '33333333-0003-0000-0000-000000000001');


-- ─────────────────────────────────────────────────────────────────────────────
-- PASO 4: COLOCACIONES RELACIONADAS (mismo idioma)
-- ─────────────────────────────────────────────────────────────────────────────

insert into related_collocations (collocation_id, related_id, sort_order) values
-- make progress → relacionadas en inglés
('11111111-0001-0000-0000-000000000001', '11111111-0014-0000-0000-000000000001', 1), -- achieve a goal
('11111111-0001-0000-0000-000000000001', '11111111-0013-0000-0000-000000000001', 2), -- set a goal
('11111111-0001-0000-0000-000000000001', '11111111-0021-0000-0000-000000000001', 3), -- build confidence
('11111111-0001-0000-0000-000000000001', '11111111-0015-0000-0000-000000000001', 4), -- overcome challenges

-- make a decision → relacionadas en inglés
('11111111-0002-0000-0000-000000000001', '11111111-0005-0000-0000-000000000001', 1), -- reach a conclusion
('11111111-0002-0000-0000-000000000001', '11111111-0019-0000-0000-000000000001', 2), -- reach an agreement
('11111111-0002-0000-0000-000000000001', '11111111-0018-0000-0000-000000000001', 3), -- take a risk
('11111111-0002-0000-0000-000000000001', '11111111-0020-0000-0000-000000000001', 4), -- seek advice

-- take action → relacionadas en inglés
('11111111-0003-0000-0000-000000000001', '11111111-0009-0000-0000-000000000001', 1), -- take responsibility
('11111111-0003-0000-0000-000000000001', '11111111-0018-0000-0000-000000000001', 2), -- take a risk
('11111111-0003-0000-0000-000000000001', '11111111-0015-0000-0000-000000000001', 3), -- overcome challenges

-- conduct research → relacionadas en inglés
('11111111-0007-0000-0000-000000000001', '11111111-0005-0000-0000-000000000001', 1), -- reach a conclusion
('11111111-0007-0000-0000-000000000001', '11111111-0006-0000-0000-000000000001', 2), -- gain experience
('11111111-0007-0000-0000-000000000001', '11111111-0024-0000-0000-000000000001', 3), -- submit a report

-- tomar una decisión → relacionadas en español
('22222222-0002-0000-0000-000000000001', '22222222-0005-0000-0000-000000000001', 1), -- asumir la responsabilidad
('22222222-0002-0000-0000-000000000001', '22222222-0003-0000-0000-000000000001', 2), -- prestar atención

-- hacer progresos → relacionadas en español
('22222222-0001-0000-0000-000000000001', '22222222-0002-0000-0000-000000000001', 1), -- tomar una decisión
('22222222-0001-0000-0000-000000000001', '22222222-0004-0000-0000-000000000001', 2); -- llevar a cabo
