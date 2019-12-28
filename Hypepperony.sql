PGDMP     9    3                w            Hypepperony    11.2    11.2 L    `           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            a           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            b           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            c           1262    16405    Hypepperony    DATABASE     �   CREATE DATABASE "Hypepperony" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Italian_Italy.1252' LC_CTYPE = 'Italian_Italy.1252';
    DROP DATABASE "Hypepperony";
             Rob    false            �            1259    16406    artistic_events    TABLE     �   CREATE TABLE public.artistic_events (
    name character varying(255) NOT NULL,
    day timestamp(0) without time zone,
    fact_sheet text,
    abstract text,
    id integer NOT NULL,
    seminar_id integer,
    type character varying(32)
);
 #   DROP TABLE public.artistic_events;
       public         Rob    false            �            1259    16414    ARTISTIC_EVENT_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ARTISTIC_EVENT_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."ARTISTIC_EVENT_ID_seq";
       public       Rob    false    196            d           0    0    ARTISTIC_EVENT_ID_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public."ARTISTIC_EVENT_ID_seq" OWNED BY public.artistic_events.id;
            public       Rob    false    197            �            1259    16451    artists    TABLE     �   CREATE TABLE public.artists (
    id integer NOT NULL,
    name character varying(32) NOT NULL,
    details text,
    current_affiliation text,
    main_achievements text
);
    DROP TABLE public.artists;
       public         Rob    false            �            1259    16449    ARTISTS_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ARTISTS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."ARTISTS_ID_seq";
       public       Rob    false    202            e           0    0    ARTISTS_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."ARTISTS_ID_seq" OWNED BY public.artists.id;
            public       Rob    false    201            �            1259    16462 	   companies    TABLE     v   CREATE TABLE public.companies (
    id integer NOT NULL,
    name character varying(32) NOT NULL,
    details text
);
    DROP TABLE public.companies;
       public         Rob    false            �            1259    16460    COMPANIES_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."COMPANIES_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."COMPANIES_ID_seq";
       public       Rob    false    204            f           0    0    COMPANIES_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."COMPANIES_ID_seq" OWNED BY public.companies.id;
            public       Rob    false    203            �            1259    16490 	   galleries    TABLE     �   CREATE TABLE public.galleries (
    id integer NOT NULL,
    events_id integer,
    photo path NOT NULL,
    artists_id integer,
    companies_id integer,
    seminar_id integer
);
    DROP TABLE public.galleries;
       public         Rob    false            �            1259    16488    GALLERIES_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."GALLERIES_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."GALLERIES_ID_seq";
       public       Rob    false    208            g           0    0    GALLERIES_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."GALLERIES_ID_seq" OWNED BY public.galleries.id;
            public       Rob    false    207            �            1259    16516    played    TABLE     �   CREATE TABLE public.played (
    id integer NOT NULL,
    events_id integer NOT NULL,
    artists_id integer,
    companies_id integer
);
    DROP TABLE public.played;
       public         Rob    false            �            1259    16514    PLAYED_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."PLAYED_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."PLAYED_ID_seq";
       public       Rob    false    210            h           0    0    PLAYED_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."PLAYED_ID_seq" OWNED BY public.played.id;
            public       Rob    false    209            �            1259    16433    registrations    TABLE     �   CREATE TABLE public.registrations (
    artistic_events_id integer NOT NULL,
    id integer NOT NULL,
    user_web_id integer NOT NULL
);
 !   DROP TABLE public.registrations;
       public         Rob    false            �            1259    16431    REGISTRATIONS_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."REGISTRATIONS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."REGISTRATIONS_ID_seq";
       public       Rob    false    200            i           0    0    REGISTRATIONS_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."REGISTRATIONS_ID_seq" OWNED BY public.registrations.id;
            public       Rob    false    199            �            1259    16473    seminars    TABLE     �   CREATE TABLE public.seminars (
    id integer NOT NULL,
    day timestamp(6) without time zone NOT NULL,
    title character varying(255) NOT NULL,
    location character varying(255) NOT NULL
);
    DROP TABLE public.seminars;
       public         Rob    false            �            1259    16471    SEMINAR_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."SEMINAR_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."SEMINAR_ID_seq";
       public       Rob    false    206            j           0    0    SEMINAR_ID_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public."SEMINAR_ID_seq" OWNED BY public.seminars.id;
            public       Rob    false    205            �            1259    16426 	   users_web    TABLE     �   CREATE TABLE public.users_web (
    "e-mail" character varying(255) NOT NULL,
    password character varying(32) NOT NULL,
    id integer NOT NULL,
    admin boolean NOT NULL
);
    DROP TABLE public.users_web;
       public         Rob    false            �            1259    16542    users_web_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_web_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.users_web_id_seq;
       public       Rob    false    198            k           0    0    users_web_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.users_web_id_seq OWNED BY public.users_web.id;
            public       Rob    false    211            �
           2604    16416    artistic_events id    DEFAULT     y   ALTER TABLE ONLY public.artistic_events ALTER COLUMN id SET DEFAULT nextval('public."ARTISTIC_EVENT_ID_seq"'::regclass);
 A   ALTER TABLE public.artistic_events ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    197    196            �
           2604    16454 
   artists id    DEFAULT     j   ALTER TABLE ONLY public.artists ALTER COLUMN id SET DEFAULT nextval('public."ARTISTS_ID_seq"'::regclass);
 9   ALTER TABLE public.artists ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    201    202    202            �
           2604    16465    companies id    DEFAULT     n   ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public."COMPANIES_ID_seq"'::regclass);
 ;   ALTER TABLE public.companies ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    203    204    204            �
           2604    16493    galleries id    DEFAULT     n   ALTER TABLE ONLY public.galleries ALTER COLUMN id SET DEFAULT nextval('public."GALLERIES_ID_seq"'::regclass);
 ;   ALTER TABLE public.galleries ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    208    207    208            �
           2604    16519 	   played id    DEFAULT     h   ALTER TABLE ONLY public.played ALTER COLUMN id SET DEFAULT nextval('public."PLAYED_ID_seq"'::regclass);
 8   ALTER TABLE public.played ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    209    210    210            �
           2604    16436    registrations id    DEFAULT     v   ALTER TABLE ONLY public.registrations ALTER COLUMN id SET DEFAULT nextval('public."REGISTRATIONS_ID_seq"'::regclass);
 ?   ALTER TABLE public.registrations ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    199    200    200            �
           2604    16476    seminars id    DEFAULT     k   ALTER TABLE ONLY public.seminars ALTER COLUMN id SET DEFAULT nextval('public."SEMINAR_ID_seq"'::regclass);
 :   ALTER TABLE public.seminars ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    205    206    206            �
           2604    16544    users_web id    DEFAULT     l   ALTER TABLE ONLY public.users_web ALTER COLUMN id SET DEFAULT nextval('public.users_web_id_seq'::regclass);
 ;   ALTER TABLE public.users_web ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    211    198            N          0    16406    artistic_events 
   TABLE DATA               `   COPY public.artistic_events (name, day, fact_sheet, abstract, id, seminar_id, type) FROM stdin;
    public       Rob    false    196   YV       T          0    16451    artists 
   TABLE DATA               \   COPY public.artists (id, name, details, current_affiliation, main_achievements) FROM stdin;
    public       Rob    false    202   BX       V          0    16462 	   companies 
   TABLE DATA               6   COPY public.companies (id, name, details) FROM stdin;
    public       Rob    false    204   mX       Z          0    16490 	   galleries 
   TABLE DATA               _   COPY public.galleries (id, events_id, photo, artists_id, companies_id, seminar_id) FROM stdin;
    public       Rob    false    208   �X       \          0    16516    played 
   TABLE DATA               I   COPY public.played (id, events_id, artists_id, companies_id) FROM stdin;
    public       Rob    false    210   �X       R          0    16433    registrations 
   TABLE DATA               L   COPY public.registrations (artistic_events_id, id, user_web_id) FROM stdin;
    public       Rob    false    200   �X       X          0    16473    seminars 
   TABLE DATA               <   COPY public.seminars (id, day, title, location) FROM stdin;
    public       Rob    false    206   �X       P          0    16426 	   users_web 
   TABLE DATA               B   COPY public.users_web ("e-mail", password, id, admin) FROM stdin;
    public       Rob    false    198   =Y       l           0    0    ARTISTIC_EVENT_ID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."ARTISTIC_EVENT_ID_seq"', 100, true);
            public       Rob    false    197            m           0    0    ARTISTS_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."ARTISTS_ID_seq"', 1, true);
            public       Rob    false    201            n           0    0    COMPANIES_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."COMPANIES_ID_seq"', 1, true);
            public       Rob    false    203            o           0    0    GALLERIES_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."GALLERIES_ID_seq"', 1, false);
            public       Rob    false    207            p           0    0    PLAYED_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."PLAYED_ID_seq"', 6, true);
            public       Rob    false    209            q           0    0    REGISTRATIONS_ID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."REGISTRATIONS_ID_seq"', 1, false);
            public       Rob    false    199            r           0    0    SEMINAR_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."SEMINAR_ID_seq"', 1, true);
            public       Rob    false    205            s           0    0    users_web_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_web_id_seq', 1, false);
            public       Rob    false    211            �
           2606    16459    artists ARTISTS_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.artists
    ADD CONSTRAINT "ARTISTS_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.artists DROP CONSTRAINT "ARTISTS_pkey";
       public         Rob    false    202            �
           2606    16470    companies COMPANIES_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "COMPANIES_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.companies DROP CONSTRAINT "COMPANIES_pkey";
       public         Rob    false    204            �
           2606    16498    galleries GALLERIES_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "GALLERIES_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "GALLERIES_pkey";
       public         Rob    false    208            �
           2606    16425    artistic_events ID_pk 
   CONSTRAINT     U   ALTER TABLE ONLY public.artistic_events
    ADD CONSTRAINT "ID_pk" PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.artistic_events DROP CONSTRAINT "ID_pk";
       public         Rob    false    196            �
           2606    16521    played PLAYED_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "PLAYED_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.played DROP CONSTRAINT "PLAYED_pkey";
       public         Rob    false    210            �
           2606    16438     registrations REGISTRATIONS_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT "REGISTRATIONS_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.registrations DROP CONSTRAINT "REGISTRATIONS_pkey";
       public         Rob    false    200            �
           2606    16481    seminars SEMINAR_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.seminars
    ADD CONSTRAINT "SEMINAR_pkey" PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.seminars DROP CONSTRAINT "SEMINAR_pkey";
       public         Rob    false    206            �
           2606    16538    seminars Un_title 
   CONSTRAINT     _   ALTER TABLE ONLY public.seminars
    ADD CONSTRAINT "Un_title" UNIQUE (title) INCLUDE (title);
 =   ALTER TABLE ONLY public.seminars DROP CONSTRAINT "Un_title";
       public         Rob    false    206    206            �
           2606    16574    played artist_or_company    CHECK CONSTRAINT     �   ALTER TABLE public.played
    ADD CONSTRAINT artist_or_company CHECK ((((artists_id IS NOT NULL) AND (companies_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NOT NULL)))) NOT VALID;
 =   ALTER TABLE public.played DROP CONSTRAINT artist_or_company;
       public       Rob    false    210    210    210    210            �
           2606    16649    galleries gallery_single_check    CHECK CONSTRAINT     �  ALTER TABLE public.galleries
    ADD CONSTRAINT gallery_single_check CHECK ((((artists_id IS NOT NULL) AND (companies_id IS NULL) AND (events_id IS NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NOT NULL) AND (events_id IS NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NULL) AND (events_id IS NOT NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NULL) AND (events_id IS NULL) AND (seminar_id IS NOT NULL)))) NOT VALID;
 C   ALTER TABLE public.galleries DROP CONSTRAINT gallery_single_check;
       public       Rob    false    208    208    208    208    208    208    208    208            �
           2606    16551    users_web pk_id 
   CONSTRAINT     Z   ALTER TABLE ONLY public.users_web
    ADD CONSTRAINT pk_id PRIMARY KEY (id) INCLUDE (id);
 9   ALTER TABLE ONLY public.users_web DROP CONSTRAINT pk_id;
       public         Rob    false    198    198            �
           1259    16487    fki_EVENT_IN_SEMINAR    INDEX     X   CREATE INDEX "fki_EVENT_IN_SEMINAR" ON public.artistic_events USING btree (seminar_id);
 *   DROP INDEX public."fki_EVENT_IN_SEMINAR";
       public         Rob    false    196            �
           1259    16648    fki_SEMINAR_IDENTIFICATION_FK    INDEX     [   CREATE INDEX "fki_SEMINAR_IDENTIFICATION_FK" ON public.galleries USING btree (seminar_id);
 3   DROP INDEX public."fki_SEMINAR_IDENTIFICATION_FK";
       public         Rob    false    208            �
           1259    16557    fki_user_web_id    INDEX     P   CREATE INDEX fki_user_web_id ON public.registrations USING btree (user_web_id);
 #   DROP INDEX public.fki_user_web_id;
       public         Rob    false    200            �
           2606    16504     galleries ARTISTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "ARTISTS_IDENTIFICATION" FOREIGN KEY (artists_id) REFERENCES public.artists(id);
 L   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "ARTISTS_IDENTIFICATION";
       public       Rob    false    202    208    2751            �
           2606    16527    played ARTIST_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "ARTIST_IDENTIFICATION" FOREIGN KEY (artists_id) REFERENCES public.artists(id);
 H   ALTER TABLE ONLY public.played DROP CONSTRAINT "ARTIST_IDENTIFICATION";
       public       Rob    false    210    202    2751            �
           2606    16532    played COMPANIES_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "COMPANIES_IDENTIFICATION" FOREIGN KEY (companies_id) REFERENCES public.companies(id);
 K   ALTER TABLE ONLY public.played DROP CONSTRAINT "COMPANIES_IDENTIFICATION";
       public       Rob    false    2753    204    210            �
           2606    16509 #   galleries COMPANIES_IDENTIFICATIONS    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "COMPANIES_IDENTIFICATIONS" FOREIGN KEY (companies_id) REFERENCES public.companies(id);
 O   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "COMPANIES_IDENTIFICATIONS";
       public       Rob    false    208    2753    204            �
           2606    16439    registrations EVENTS    FK CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT "EVENTS" FOREIGN KEY (artistic_events_id) REFERENCES public.artistic_events(id);
 @   ALTER TABLE ONLY public.registrations DROP CONSTRAINT "EVENTS";
       public       Rob    false    196    200    2743            �
           2606    16499    galleries EVENTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "EVENTS_IDENTIFICATION" FOREIGN KEY (events_id) REFERENCES public.artistic_events(id);
 K   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "EVENTS_IDENTIFICATION";
       public       Rob    false    208    196    2743            �
           2606    16522    played EVENTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "EVENTS_IDENTIFICATION" FOREIGN KEY (events_id) REFERENCES public.artistic_events(id);
 H   ALTER TABLE ONLY public.played DROP CONSTRAINT "EVENTS_IDENTIFICATION";
       public       Rob    false    2743    196    210            �
           2606    16482     artistic_events EVENT_IN_SEMINAR    FK CONSTRAINT     �   ALTER TABLE ONLY public.artistic_events
    ADD CONSTRAINT "EVENT_IN_SEMINAR" FOREIGN KEY (seminar_id) REFERENCES public.seminars(id);
 L   ALTER TABLE ONLY public.artistic_events DROP CONSTRAINT "EVENT_IN_SEMINAR";
       public       Rob    false    196    206    2755            �
           2606    16643 #   galleries SEMINAR_IDENTIFICATION_FK    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "SEMINAR_IDENTIFICATION_FK" FOREIGN KEY (seminar_id) REFERENCES public.seminars(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "SEMINAR_IDENTIFICATION_FK";
       public       Rob    false    206    208    2755            �
           2606    16552    registrations user_web_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT user_web_id FOREIGN KEY (user_web_id) REFERENCES public.users_web(id);
 C   ALTER TABLE ONLY public.registrations DROP CONSTRAINT user_web_id;
       public       Rob    false    200    198    2746            N   �  x���Mn1�������C�ٌ�41�A�v��Wuc �HL�!��$p������e	1���.�C�����޵�>/!-���ڝ���?^�-��:�c;<� �V�����S� �����8����f8p���Ō�Q\<Mp��	^1��8M�Y��T��#�p� ���lN�f�	J$�	�$�	j�N�}�Z���55�����}��.�{PT=���T��E\l��\<���2����`p�p48{8mNq�&��`K��]�����m���i�9��Ot�M��P_y5�0�<�&A��l{��22�)�$ɻ�:ã2n	z�گ��������C�����f�v��`S���O�F��6l*2�T������H��$(H��$(H��$(H��$(H��$�H��$�i	_��&���up�_�\�%���{}��^�_�[��!�n����n��Yh�v      T      x�3�L�LL����� �=... U�      V      x�3�L�LL���/.�������� Ia�      Z      x������ � �      \      x�3�44�4���2��b���� 3��      R      x������ � �      X   0   x�3�4421�50�50U04�20�20�LL)�L���Mͩ������ �	>      P      x������ � �     