PGDMP         8                 x            Pippo    12.1    12.1 L    g           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            h           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            i           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            j           1262    32768    Pippo    DATABASE     �   CREATE DATABASE "Pippo" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Italian_Italy.1252' LC_CTYPE = 'Italian_Italy.1252';
    DROP DATABASE "Pippo";
                Rob    false            �            1259    32769    artistic_events    TABLE     �   CREATE TABLE public.artistic_events (
    name character varying(255) NOT NULL,
    day timestamp(0) without time zone,
    fact_sheet text,
    abstract text,
    id integer NOT NULL,
    seminar_id integer,
    type character varying(32)
);
 #   DROP TABLE public.artistic_events;
       public         heap    Rob    false            �            1259    32775    ARTISTIC_EVENT_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ARTISTIC_EVENT_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."ARTISTIC_EVENT_ID_seq";
       public          Rob    false    202            k           0    0    ARTISTIC_EVENT_ID_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public."ARTISTIC_EVENT_ID_seq" OWNED BY public.artistic_events.id;
          public          Rob    false    203            �            1259    32777    artists    TABLE     �   CREATE TABLE public.artists (
    id integer NOT NULL,
    name character varying(32) NOT NULL,
    details text,
    current_affiliation text,
    main_achievements text
);
    DROP TABLE public.artists;
       public         heap    Rob    false            �            1259    32783    ARTISTS_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."ARTISTS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."ARTISTS_ID_seq";
       public          Rob    false    204            l           0    0    ARTISTS_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."ARTISTS_ID_seq" OWNED BY public.artists.id;
          public          Rob    false    205            �            1259    32785 	   companies    TABLE     v   CREATE TABLE public.companies (
    id integer NOT NULL,
    name character varying(32) NOT NULL,
    details text
);
    DROP TABLE public.companies;
       public         heap    Rob    false            �            1259    32791    COMPANIES_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."COMPANIES_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."COMPANIES_ID_seq";
       public          Rob    false    206            m           0    0    COMPANIES_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."COMPANIES_ID_seq" OWNED BY public.companies.id;
          public          Rob    false    207            �            1259    32793 	   galleries    TABLE     �   CREATE TABLE public.galleries (
    id integer NOT NULL,
    events_id integer,
    photo path NOT NULL,
    artists_id integer,
    companies_id integer,
    seminar_id integer
);
    DROP TABLE public.galleries;
       public         heap    Rob    false            �            1259    32799    GALLERIES_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."GALLERIES_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."GALLERIES_ID_seq";
       public          Rob    false    208            n           0    0    GALLERIES_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."GALLERIES_ID_seq" OWNED BY public.galleries.id;
          public          Rob    false    209            �            1259    32801    played    TABLE     �   CREATE TABLE public.played (
    id integer NOT NULL,
    events_id integer NOT NULL,
    artists_id integer,
    companies_id integer
);
    DROP TABLE public.played;
       public         heap    Rob    false            �            1259    32804    PLAYED_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."PLAYED_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."PLAYED_ID_seq";
       public          Rob    false    210            o           0    0    PLAYED_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."PLAYED_ID_seq" OWNED BY public.played.id;
          public          Rob    false    211            �            1259    32806    registrations    TABLE     �   CREATE TABLE public.registrations (
    artistic_events_id integer NOT NULL,
    id integer NOT NULL,
    user_web_id integer NOT NULL
);
 !   DROP TABLE public.registrations;
       public         heap    Rob    false            �            1259    32809    REGISTRATIONS_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."REGISTRATIONS_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."REGISTRATIONS_ID_seq";
       public          Rob    false    212            p           0    0    REGISTRATIONS_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."REGISTRATIONS_ID_seq" OWNED BY public.registrations.id;
          public          Rob    false    213            �            1259    32811    seminars    TABLE     �   CREATE TABLE public.seminars (
    id integer NOT NULL,
    day timestamp(6) without time zone NOT NULL,
    title character varying(255) NOT NULL,
    location character varying(255) NOT NULL
);
    DROP TABLE public.seminars;
       public         heap    Rob    false            �            1259    32817    SEMINAR_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."SEMINAR_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."SEMINAR_ID_seq";
       public          Rob    false    214            q           0    0    SEMINAR_ID_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public."SEMINAR_ID_seq" OWNED BY public.seminars.id;
          public          Rob    false    215            �            1259    32819 	   users_web    TABLE     �   CREATE TABLE public.users_web (
    "e-mail" character varying(255) NOT NULL,
    password character varying(32) NOT NULL,
    id integer NOT NULL,
    admin boolean NOT NULL
);
    DROP TABLE public.users_web;
       public         heap    Rob    false            �            1259    32822    users_web_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_web_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.users_web_id_seq;
       public          Rob    false    216            r           0    0    users_web_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.users_web_id_seq OWNED BY public.users_web.id;
          public          Rob    false    217            �
           2604    32824    artistic_events id    DEFAULT     y   ALTER TABLE ONLY public.artistic_events ALTER COLUMN id SET DEFAULT nextval('public."ARTISTIC_EVENT_ID_seq"'::regclass);
 A   ALTER TABLE public.artistic_events ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    203    202            �
           2604    32825 
   artists id    DEFAULT     j   ALTER TABLE ONLY public.artists ALTER COLUMN id SET DEFAULT nextval('public."ARTISTS_ID_seq"'::regclass);
 9   ALTER TABLE public.artists ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    205    204            �
           2604    32826    companies id    DEFAULT     n   ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public."COMPANIES_ID_seq"'::regclass);
 ;   ALTER TABLE public.companies ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    207    206            �
           2604    32827    galleries id    DEFAULT     n   ALTER TABLE ONLY public.galleries ALTER COLUMN id SET DEFAULT nextval('public."GALLERIES_ID_seq"'::regclass);
 ;   ALTER TABLE public.galleries ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    209    208            �
           2604    32828 	   played id    DEFAULT     h   ALTER TABLE ONLY public.played ALTER COLUMN id SET DEFAULT nextval('public."PLAYED_ID_seq"'::regclass);
 8   ALTER TABLE public.played ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    211    210            �
           2604    32829    registrations id    DEFAULT     v   ALTER TABLE ONLY public.registrations ALTER COLUMN id SET DEFAULT nextval('public."REGISTRATIONS_ID_seq"'::regclass);
 ?   ALTER TABLE public.registrations ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    213    212            �
           2604    32830    seminars id    DEFAULT     k   ALTER TABLE ONLY public.seminars ALTER COLUMN id SET DEFAULT nextval('public."SEMINAR_ID_seq"'::regclass);
 :   ALTER TABLE public.seminars ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    215    214            �
           2604    32831    users_web id    DEFAULT     l   ALTER TABLE ONLY public.users_web ALTER COLUMN id SET DEFAULT nextval('public.users_web_id_seq'::regclass);
 ;   ALTER TABLE public.users_web ALTER COLUMN id DROP DEFAULT;
       public          Rob    false    217    216            U          0    32769    artistic_events 
   TABLE DATA           `   COPY public.artistic_events (name, day, fact_sheet, abstract, id, seminar_id, type) FROM stdin;
    public          Rob    false    202   �W       W          0    32777    artists 
   TABLE DATA           \   COPY public.artists (id, name, details, current_affiliation, main_achievements) FROM stdin;
    public          Rob    false    204   �Z       Y          0    32785 	   companies 
   TABLE DATA           6   COPY public.companies (id, name, details) FROM stdin;
    public          Rob    false    206   |[       [          0    32793 	   galleries 
   TABLE DATA           _   COPY public.galleries (id, events_id, photo, artists_id, companies_id, seminar_id) FROM stdin;
    public          Rob    false    208   \       ]          0    32801    played 
   TABLE DATA           I   COPY public.played (id, events_id, artists_id, companies_id) FROM stdin;
    public          Rob    false    210   *\       _          0    32806    registrations 
   TABLE DATA           L   COPY public.registrations (artistic_events_id, id, user_web_id) FROM stdin;
    public          Rob    false    212   �\       a          0    32811    seminars 
   TABLE DATA           <   COPY public.seminars (id, day, title, location) FROM stdin;
    public          Rob    false    214   �\       c          0    32819 	   users_web 
   TABLE DATA           B   COPY public.users_web ("e-mail", password, id, admin) FROM stdin;
    public          Rob    false    216   �]       s           0    0    ARTISTIC_EVENT_ID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."ARTISTIC_EVENT_ID_seq"', 105, true);
          public          Rob    false    203            t           0    0    ARTISTS_ID_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."ARTISTS_ID_seq"', 12, true);
          public          Rob    false    205            u           0    0    COMPANIES_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."COMPANIES_ID_seq"', 8, true);
          public          Rob    false    207            v           0    0    GALLERIES_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."GALLERIES_ID_seq"', 1, false);
          public          Rob    false    209            w           0    0    PLAYED_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."PLAYED_ID_seq"', 22, true);
          public          Rob    false    211            x           0    0    REGISTRATIONS_ID_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."REGISTRATIONS_ID_seq"', 1, false);
          public          Rob    false    213            y           0    0    SEMINAR_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."SEMINAR_ID_seq"', 7, true);
          public          Rob    false    215            z           0    0    users_web_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_web_id_seq', 1, false);
          public          Rob    false    217            �
           2606    32833    artists ARTISTS_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.artists
    ADD CONSTRAINT "ARTISTS_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.artists DROP CONSTRAINT "ARTISTS_pkey";
       public            Rob    false    204            �
           2606    32835    companies COMPANIES_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "COMPANIES_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.companies DROP CONSTRAINT "COMPANIES_pkey";
       public            Rob    false    206            �
           2606    32837    galleries GALLERIES_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "GALLERIES_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "GALLERIES_pkey";
       public            Rob    false    208            �
           2606    32839    artistic_events ID_pk 
   CONSTRAINT     U   ALTER TABLE ONLY public.artistic_events
    ADD CONSTRAINT "ID_pk" PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.artistic_events DROP CONSTRAINT "ID_pk";
       public            Rob    false    202            �
           2606    32841    played PLAYED_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "PLAYED_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.played DROP CONSTRAINT "PLAYED_pkey";
       public            Rob    false    210            �
           2606    32843     registrations REGISTRATIONS_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT "REGISTRATIONS_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.registrations DROP CONSTRAINT "REGISTRATIONS_pkey";
       public            Rob    false    212            �
           2606    32845    seminars SEMINAR_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.seminars
    ADD CONSTRAINT "SEMINAR_pkey" PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.seminars DROP CONSTRAINT "SEMINAR_pkey";
       public            Rob    false    214            �
           2606    32847    seminars Un_title 
   CONSTRAINT     _   ALTER TABLE ONLY public.seminars
    ADD CONSTRAINT "Un_title" UNIQUE (title) INCLUDE (title);
 =   ALTER TABLE ONLY public.seminars DROP CONSTRAINT "Un_title";
       public            Rob    false    214    214            �
           2606    32848    played artist_or_company    CHECK CONSTRAINT     �   ALTER TABLE public.played
    ADD CONSTRAINT artist_or_company CHECK ((((artists_id IS NOT NULL) AND (companies_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NOT NULL)))) NOT VALID;
 =   ALTER TABLE public.played DROP CONSTRAINT artist_or_company;
       public          Rob    false    210    210    210    210            �
           2606    32849    galleries gallery_single_check    CHECK CONSTRAINT     �  ALTER TABLE public.galleries
    ADD CONSTRAINT gallery_single_check CHECK ((((artists_id IS NOT NULL) AND (companies_id IS NULL) AND (events_id IS NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NOT NULL) AND (events_id IS NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NULL) AND (events_id IS NOT NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NULL) AND (events_id IS NULL) AND (seminar_id IS NOT NULL)))) NOT VALID;
 C   ALTER TABLE public.galleries DROP CONSTRAINT gallery_single_check;
       public          Rob    false    208    208    208    208    208    208    208    208            �
           2606    32851    users_web pk_id 
   CONSTRAINT     Z   ALTER TABLE ONLY public.users_web
    ADD CONSTRAINT pk_id PRIMARY KEY (id) INCLUDE (id);
 9   ALTER TABLE ONLY public.users_web DROP CONSTRAINT pk_id;
       public            Rob    false    216    216            �
           1259    32852    fki_EVENT_IN_SEMINAR    INDEX     X   CREATE INDEX "fki_EVENT_IN_SEMINAR" ON public.artistic_events USING btree (seminar_id);
 *   DROP INDEX public."fki_EVENT_IN_SEMINAR";
       public            Rob    false    202            �
           1259    32853    fki_SEMINAR_IDENTIFICATION_FK    INDEX     [   CREATE INDEX "fki_SEMINAR_IDENTIFICATION_FK" ON public.galleries USING btree (seminar_id);
 3   DROP INDEX public."fki_SEMINAR_IDENTIFICATION_FK";
       public            Rob    false    208            �
           1259    32854    fki_user_web_id    INDEX     P   CREATE INDEX fki_user_web_id ON public.registrations USING btree (user_web_id);
 #   DROP INDEX public.fki_user_web_id;
       public            Rob    false    212            �
           2606    32855     galleries ARTISTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "ARTISTS_IDENTIFICATION" FOREIGN KEY (artists_id) REFERENCES public.artists(id);
 L   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "ARTISTS_IDENTIFICATION";
       public          Rob    false    204    208    2748            �
           2606    32860    played ARTIST_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "ARTIST_IDENTIFICATION" FOREIGN KEY (artists_id) REFERENCES public.artists(id);
 H   ALTER TABLE ONLY public.played DROP CONSTRAINT "ARTIST_IDENTIFICATION";
       public          Rob    false    210    2748    204            �
           2606    32865    played COMPANIES_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "COMPANIES_IDENTIFICATION" FOREIGN KEY (companies_id) REFERENCES public.companies(id);
 K   ALTER TABLE ONLY public.played DROP CONSTRAINT "COMPANIES_IDENTIFICATION";
       public          Rob    false    2750    206    210            �
           2606    32870 #   galleries COMPANIES_IDENTIFICATIONS    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "COMPANIES_IDENTIFICATIONS" FOREIGN KEY (companies_id) REFERENCES public.companies(id);
 O   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "COMPANIES_IDENTIFICATIONS";
       public          Rob    false    206    2750    208            �
           2606    32875    registrations EVENTS    FK CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT "EVENTS" FOREIGN KEY (artistic_events_id) REFERENCES public.artistic_events(id);
 @   ALTER TABLE ONLY public.registrations DROP CONSTRAINT "EVENTS";
       public          Rob    false    212    202    2745            �
           2606    32880    galleries EVENTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "EVENTS_IDENTIFICATION" FOREIGN KEY (events_id) REFERENCES public.artistic_events(id);
 K   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "EVENTS_IDENTIFICATION";
       public          Rob    false    202    208    2745            �
           2606    32885    played EVENTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "EVENTS_IDENTIFICATION" FOREIGN KEY (events_id) REFERENCES public.artistic_events(id);
 H   ALTER TABLE ONLY public.played DROP CONSTRAINT "EVENTS_IDENTIFICATION";
       public          Rob    false    2745    210    202            �
           2606    32890     artistic_events EVENT_IN_SEMINAR    FK CONSTRAINT     �   ALTER TABLE ONLY public.artistic_events
    ADD CONSTRAINT "EVENT_IN_SEMINAR" FOREIGN KEY (seminar_id) REFERENCES public.seminars(id);
 L   ALTER TABLE ONLY public.artistic_events DROP CONSTRAINT "EVENT_IN_SEMINAR";
       public          Rob    false    2760    202    214            �
           2606    32895 #   galleries SEMINAR_IDENTIFICATION_FK    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "SEMINAR_IDENTIFICATION_FK" FOREIGN KEY (seminar_id) REFERENCES public.seminars(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "SEMINAR_IDENTIFICATION_FK";
       public          Rob    false    208    2760    214            �
           2606    32900    registrations user_web_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT user_web_id FOREIGN KEY (user_web_id) REFERENCES public.users_web(id);
 C   ALTER TABLE ONLY public.registrations DROP CONSTRAINT user_web_id;
       public          Rob    false    2764    212    216            U      x����n� ���S�Y�lȱ]i/�jw�c/S���6d��C�~�i���f;�"��0�e`b�-�KҬ[�m�`i�+���c�xI�<y��cc����{��r�;�+��Ÿ%����`k��aE�3N�S
����N\��\,��zװ��QR���\�W�`Q~��U�K�A�U�f<U1xnP�e.��U���s�2�1xnP�<��*��Tel���A�#��X��5�8��s�RD�yJ�b�e�<�A)�p`P�,���*X`,�8��H8��Y 18���f�|kb��2�`kP��*�*�uX^E���p��i�X�e��80(�.�E,��J����X��Ki��:��6��Xݜ�P�'*N~b��Y��+JcS�66K�jc�S����T�Ʀ�46U����2��0Š����bPRJ�AI1()%Š�T��bP�I�e� ��?�k#����N�l>�;x��李!H���7�5��Gs6����v�a�GLm�_���#�F��c��x38V;;���<X�'*O�*���ԛ��l���?�3v�	�z�j;�������t囹.�<Kʏ�{�����;X̲s���h[=`�8���{8`�#5`k���:�f?��?��]b�=<�X?8o`�Ռ��������M;��Z��4�!��y���i��kkN\$y����z�8��o���'�<�&N8�V�fƽ�Q���M��Z�w.��uo�wS�i�h�{��	M �73 s�9�Q��5�h��<|�l6� ÑH�      W   �   x�U��
�0���)�b���)"���҄��͆H�_�C"����g�d��_T��1V�C�����x�4�v�ޢ�N%+�������$*���O��3{.p�-Q���E�P�,��w=o^%������-2n�RQ%B�      Y   �   x�=��
1E��W����,��r�!��$q�^��9����5iɑ��ّ�xu#D���ƵB���F��^Si�H�e��6�ed���DK��?�iД`C�XCzd^~��,{4m�1(�8�      [      x������ � �      ]   f   x�=��� ��f)Ed	'`�9�A����$�a�y����B���8o��Sy�\�<q�?X���nB�+��©��r��!״gs{My�U���\#s      _      x������ � �      a   �   x�U���0����{�n��x01ƣ��8Z2�O/rY86�����m�2c3�tnk�jc��#���W�*k�وM��,���3�f�Q����Ώ	��/݄E�#u��u�->ř4�Vx�a\�0����,�RS��!�ϲ~5R���tI6Q��5y�	U	�ȳ螂i�H�e@x �8�N�      c      x������ � �     