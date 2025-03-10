PGDMP         $                x            Hypepperony    11.2    11.2 O    f           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            g           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            h           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            i           1262    16405    Hypepperony    DATABASE     �   CREATE DATABASE "Hypepperony" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Italian_Italy.1252' LC_CTYPE = 'Italian_Italy.1252';
    DROP DATABASE "Hypepperony";
             Rob    false            �            1259    16406    artistic_events    TABLE       CREATE TABLE public.artistic_events (
    name character varying(255) NOT NULL,
    day timestamp(0) without time zone NOT NULL,
    fact_sheet text,
    abstract text,
    id integer NOT NULL,
    seminar_id integer,
    type character varying(32) NOT NULL
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
       public       Rob    false    196            j           0    0    ARTISTIC_EVENT_ID_seq    SEQUENCE OWNED BY     R   ALTER SEQUENCE public."ARTISTIC_EVENT_ID_seq" OWNED BY public.artistic_events.id;
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
       public       Rob    false    202            k           0    0    ARTISTS_ID_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."ARTISTS_ID_seq" OWNED BY public.artists.id;
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
       public       Rob    false    204            l           0    0    COMPANIES_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."COMPANIES_ID_seq" OWNED BY public.companies.id;
            public       Rob    false    203            �            1259    16490 	   galleries    TABLE     �   CREATE TABLE public.galleries (
    id integer NOT NULL,
    events_id integer,
    artists_id integer,
    companies_id integer,
    seminar_id integer,
    photo character varying(50) NOT NULL
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
       public       Rob    false    208            m           0    0    GALLERIES_ID_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."GALLERIES_ID_seq" OWNED BY public.galleries.id;
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
       public       Rob    false    210            n           0    0    PLAYED_ID_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."PLAYED_ID_seq" OWNED BY public.played.id;
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
       public       Rob    false    200            o           0    0    REGISTRATIONS_ID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."REGISTRATIONS_ID_seq" OWNED BY public.registrations.id;
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
       public       Rob    false    206            p           0    0    SEMINAR_ID_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public."SEMINAR_ID_seq" OWNED BY public.seminars.id;
            public       Rob    false    205            �            1259    16426 	   users_web    TABLE     �   CREATE TABLE public.users_web (
    email character varying(255) NOT NULL,
    password character varying(100) NOT NULL,
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
       public       Rob    false    198            q           0    0    users_web_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.users_web_id_seq OWNED BY public.users_web.id;
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
       public       Rob    false    207    208    208            �
           2604    16519 	   played id    DEFAULT     h   ALTER TABLE ONLY public.played ALTER COLUMN id SET DEFAULT nextval('public."PLAYED_ID_seq"'::regclass);
 8   ALTER TABLE public.played ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    210    209    210            �
           2604    16436    registrations id    DEFAULT     v   ALTER TABLE ONLY public.registrations ALTER COLUMN id SET DEFAULT nextval('public."REGISTRATIONS_ID_seq"'::regclass);
 ?   ALTER TABLE public.registrations ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    199    200    200            �
           2604    16476    seminars id    DEFAULT     k   ALTER TABLE ONLY public.seminars ALTER COLUMN id SET DEFAULT nextval('public."SEMINAR_ID_seq"'::regclass);
 :   ALTER TABLE public.seminars ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    206    205    206            �
           2604    16544    users_web id    DEFAULT     l   ALTER TABLE ONLY public.users_web ALTER COLUMN id SET DEFAULT nextval('public.users_web_id_seq'::regclass);
 ;   ALTER TABLE public.users_web ALTER COLUMN id DROP DEFAULT;
       public       Rob    false    211    198            T          0    16406    artistic_events 
   TABLE DATA               `   COPY public.artistic_events (name, day, fact_sheet, abstract, id, seminar_id, type) FROM stdin;
    public       Rob    false    196   �Z       Z          0    16451    artists 
   TABLE DATA               \   COPY public.artists (id, name, details, current_affiliation, main_achievements) FROM stdin;
    public       Rob    false    202   F^       \          0    16462 	   companies 
   TABLE DATA               6   COPY public.companies (id, name, details) FROM stdin;
    public       Rob    false    204   =b       `          0    16490 	   galleries 
   TABLE DATA               _   COPY public.galleries (id, events_id, artists_id, companies_id, seminar_id, photo) FROM stdin;
    public       Rob    false    208   ke       b          0    16516    played 
   TABLE DATA               I   COPY public.played (id, events_id, artists_id, companies_id) FROM stdin;
    public       Rob    false    210   -f       X          0    16433    registrations 
   TABLE DATA               L   COPY public.registrations (artistic_events_id, id, user_web_id) FROM stdin;
    public       Rob    false    200   zf       ^          0    16473    seminars 
   TABLE DATA               <   COPY public.seminars (id, day, title, location) FROM stdin;
    public       Rob    false    206   �f       V          0    16426 	   users_web 
   TABLE DATA               ?   COPY public.users_web (email, password, id, admin) FROM stdin;
    public       Rob    false    198   =g       r           0    0    ARTISTIC_EVENT_ID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."ARTISTIC_EVENT_ID_seq"', 104, true);
            public       Rob    false    197            s           0    0    ARTISTS_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."ARTISTS_ID_seq"', 6, true);
            public       Rob    false    201            t           0    0    COMPANIES_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."COMPANIES_ID_seq"', 4, true);
            public       Rob    false    203            u           0    0    GALLERIES_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."GALLERIES_ID_seq"', 15, true);
            public       Rob    false    207            v           0    0    PLAYED_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."PLAYED_ID_seq"', 12, true);
            public       Rob    false    209            w           0    0    REGISTRATIONS_ID_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."REGISTRATIONS_ID_seq"', 6, true);
            public       Rob    false    199            x           0    0    SEMINAR_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."SEMINAR_ID_seq"', 4, true);
            public       Rob    false    205            y           0    0    users_web_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_web_id_seq', 11, true);
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
           2606    16653    registrations UNIQUE_USER/EVENT 
   CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT "UNIQUE_USER/EVENT" UNIQUE (artistic_events_id, user_web_id) INCLUDE (artistic_events_id, user_web_id);
 K   ALTER TABLE ONLY public.registrations DROP CONSTRAINT "UNIQUE_USER/EVENT";
       public         Rob    false    200    200    200    200            �
           2606    16538    seminars Un_title 
   CONSTRAINT     _   ALTER TABLE ONLY public.seminars
    ADD CONSTRAINT "Un_title" UNIQUE (title) INCLUDE (title);
 =   ALTER TABLE ONLY public.seminars DROP CONSTRAINT "Un_title";
       public         Rob    false    206    206            �
           2606    16574    played artist_or_company    CHECK CONSTRAINT     �   ALTER TABLE public.played
    ADD CONSTRAINT artist_or_company CHECK ((((artists_id IS NOT NULL) AND (companies_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NOT NULL)))) NOT VALID;
 =   ALTER TABLE public.played DROP CONSTRAINT artist_or_company;
       public       Rob    false    210    210    210    210            �
           2606    16651    users_web email_unique 
   CONSTRAINT     b   ALTER TABLE ONLY public.users_web
    ADD CONSTRAINT email_unique UNIQUE (email) INCLUDE (email);
 @   ALTER TABLE ONLY public.users_web DROP CONSTRAINT email_unique;
       public         Rob    false    198    198            �
           2606    16649    galleries gallery_single_check    CHECK CONSTRAINT     �  ALTER TABLE public.galleries
    ADD CONSTRAINT gallery_single_check CHECK ((((artists_id IS NOT NULL) AND (companies_id IS NULL) AND (events_id IS NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NOT NULL) AND (events_id IS NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NULL) AND (events_id IS NOT NULL) AND (seminar_id IS NULL)) OR ((artists_id IS NULL) AND (companies_id IS NULL) AND (events_id IS NULL) AND (seminar_id IS NOT NULL)))) NOT VALID;
 C   ALTER TABLE public.galleries DROP CONSTRAINT gallery_single_check;
       public       Rob    false    208    208    208    208    208    208    208    208            �
           2606    16551    users_web pk_id 
   CONSTRAINT     Z   ALTER TABLE ONLY public.users_web
    ADD CONSTRAINT pk_id PRIMARY KEY (id) INCLUDE (id);
 9   ALTER TABLE ONLY public.users_web DROP CONSTRAINT pk_id;
       public         Rob    false    198    198            �
           2606    16797 !   artistic_events unique_constraint 
   CONSTRAINT     k   ALTER TABLE ONLY public.artistic_events
    ADD CONSTRAINT unique_constraint UNIQUE (name) INCLUDE (name);
 K   ALTER TABLE ONLY public.artistic_events DROP CONSTRAINT unique_constraint;
       public         Rob    false    196    196            �
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
       public       Rob    false    2757    208    202            �
           2606    16527    played ARTIST_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "ARTIST_IDENTIFICATION" FOREIGN KEY (artists_id) REFERENCES public.artists(id);
 H   ALTER TABLE ONLY public.played DROP CONSTRAINT "ARTIST_IDENTIFICATION";
       public       Rob    false    2757    202    210            �
           2606    16532    played COMPANIES_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "COMPANIES_IDENTIFICATION" FOREIGN KEY (companies_id) REFERENCES public.companies(id);
 K   ALTER TABLE ONLY public.played DROP CONSTRAINT "COMPANIES_IDENTIFICATION";
       public       Rob    false    204    210    2759            �
           2606    16509 #   galleries COMPANIES_IDENTIFICATIONS    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "COMPANIES_IDENTIFICATIONS" FOREIGN KEY (companies_id) REFERENCES public.companies(id);
 O   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "COMPANIES_IDENTIFICATIONS";
       public       Rob    false    2759    208    204            �
           2606    16439    registrations EVENTS    FK CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT "EVENTS" FOREIGN KEY (artistic_events_id) REFERENCES public.artistic_events(id);
 @   ALTER TABLE ONLY public.registrations DROP CONSTRAINT "EVENTS";
       public       Rob    false    2743    200    196            �
           2606    16499    galleries EVENTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "EVENTS_IDENTIFICATION" FOREIGN KEY (events_id) REFERENCES public.artistic_events(id);
 K   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "EVENTS_IDENTIFICATION";
       public       Rob    false    196    208    2743            �
           2606    16522    played EVENTS_IDENTIFICATION    FK CONSTRAINT     �   ALTER TABLE ONLY public.played
    ADD CONSTRAINT "EVENTS_IDENTIFICATION" FOREIGN KEY (events_id) REFERENCES public.artistic_events(id);
 H   ALTER TABLE ONLY public.played DROP CONSTRAINT "EVENTS_IDENTIFICATION";
       public       Rob    false    2743    196    210            �
           2606    16482     artistic_events EVENT_IN_SEMINAR    FK CONSTRAINT     �   ALTER TABLE ONLY public.artistic_events
    ADD CONSTRAINT "EVENT_IN_SEMINAR" FOREIGN KEY (seminar_id) REFERENCES public.seminars(id);
 L   ALTER TABLE ONLY public.artistic_events DROP CONSTRAINT "EVENT_IN_SEMINAR";
       public       Rob    false    2761    196    206            �
           2606    16643 #   galleries SEMINAR_IDENTIFICATION_FK    FK CONSTRAINT     �   ALTER TABLE ONLY public.galleries
    ADD CONSTRAINT "SEMINAR_IDENTIFICATION_FK" FOREIGN KEY (seminar_id) REFERENCES public.seminars(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.galleries DROP CONSTRAINT "SEMINAR_IDENTIFICATION_FK";
       public       Rob    false    206    208    2761            �
           2606    16552    registrations user_web_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.registrations
    ADD CONSTRAINT user_web_id FOREIGN KEY (user_web_id) REFERENCES public.users_web(id);
 C   ALTER TABLE ONLY public.registrations DROP CONSTRAINT user_web_id;
       public       Rob    false    2750    200    198            T   �  x��TKr�F]����)Aʉ����G��IE���$�L�32�*w�r��$'��-ʎ�d!
̼~��q��[����5t�c(V���b��(״Z^��W�e��.��+����f�pZ����c�ǎ޺��D7�.9��������oNk��o0�k��������R�4��CL������n�Vֶ�9O=�\�Ū�ϳ�k;%>�{�ϲ^P����0������Te�OT�O�xw(�8ړq8l�N��Q�A�b7&٢��^Qs�mj����_wL���q��8I�N�%f�I��4'L�`�+��Ŀ������Z��U������խ��;{���Z�z��?�c�%���:�B/5):㭞��0�v|T�e�a�X� �[���;�'�坺w镾����x�W�Z�*����?ʗ��aOg��r�fS�CcљW=F[%�t#{���ss�p#��Jhr�[�n�Y'��n;JAR��R�M셉��#$�6	/��=�9i�� �t0�fF���Z<���Â����kIR?��i?�QL��lT�=O���D��lN_������~?��apw g�(�;��b��I*B�*�R
qr�q�3����,�څT�z�g�1�X�y����D�O�c�B��#�K/0�b]�ٯS��7c'��#pI����@>�|�6��f �ös�p�th��Z��q`�����$ߡX1�+S�U�:�e�@���F���j@_�p�v��4vIz�H��"�.߼h�c�u���C$��0����gT��;Fj�`��\'[F�J�vS������Y��5�g]t�������ӘIߺu�c�̘�;� ��n9����d��~Yl� ��0�,f���s�      Z   �  x�]U�n�8=�_Q�Pɠ;��O^:Ig�!N#��\(�"�C�.6������|�<RR�ŖEV��H���aG7��Z?��6-��,��<6�:>;�����C��+;K������'e�;���ч]A^l�s:�gC+�jr\��i㤎�]2��ز�pMA�S/L�V��)��&�h'��;]s���ؘ�=��&��i[��a�3-Ę�N���0�-�z.π��U�l��/h+� ]��	��BA�Fv`GN�a6y�~����x�$�Bˤv
�R�E�1���)cG*�m�gg�����y*���
{��1���:���%�-��?��宄�'E���a���(���W��IE"0��5�+��!�V*e���mo���1��	u��*��:����X����ʹ�YZq5�>.跣����_J��S�zՖɪ1H�R����U�3w!���i�T�t�FG�����R
�Ui�o�I��z%��O�I�*w�i-��Q�=]��ةI�;tM�b;W�W2�U�$VM��6��k.c�z�� ���	�=
�8?���iB:�©���H���u���y�
�rڤe����(��]�ǁ��^MПƕ��lz2y���Jѷ��~�?ɇXkth]Dm�6)��Z�8泐���[�^O��ɐ��[zd���C�t:~���wܤc͇Ol|K�@*V�4`���Wd?��K�:.�G\ ��mA�l�B�K5\#ZPz)X��f��g�}���T�I��&Z]��ߢ�Az�D��QQ���Kgdޡ��!c�每��:zeq���F9�U��z���0�Dp�lPt�#�y��_i�s�5�NE��}�b`#t����/vH=��@�B�'fnᅋ��@p�z�w�8���d^��kb֎�8��H��s����8.U��7��ňaz�����ȅ����2�,pٽ����U��y���|<�n��C��Ig��i^�D��d���߳�t�?%Do'      \     x�}TMo�0=w�\�@�FmA��V�峢�*$.Ǜ�:v4vv��z����B�!Rl�ߛy~3�Gg��6L���AE�]xj�L��j�,��.]cMh��|o\�9�&廞�H��Ud;�t��w�h��5��ӷ������t�X�Į&ղkhb ǝΛV7l)D�CH����U)��2%���sd3��h�^��A��nz��d�s��X,�TAǿ��8�_f!vy�O����j����ukT��śg�J*�*k�A&=K�"�&=���7��`��8�ы_�t���wK=��� �]�#��v�����r��=j�$�ĠY?�&���ҍq.��y�x� U�^]���.������n*��F����W��qu� ]����:p�m�6R�!��эb����8��"���Qǔd�+�ߠA�ćp �ۼ��*�l�}@����L���>��s?�(#][[?�ɉ���U�a��vuA��P���e��Z�Aa���߂n�a&�Gq7��O�|+�����w=��Ӄ~���\V�w���Ub�F���~����-����A/�nU�^}�O[�v�'�OtU�s\�WOOx�8}]$K�;�v�g*���m�&��3
��3��%����a�8YXy���0:�	����QS��[�7ZiH,zeV���0)��$P�/!��5P����:�ri�`V�
�Y�t��Pdo`:�f�Ol�c+L%�8�0H��v:4���|�9���LZ|C7�LS��a����S�r�b��� ��\�;-�(��s���*g��018�      `   �   x�m�;
�0�9�K�d�/�d�PB����8$iF��!)�}॔��<���A�K����Sͥ��X1��-�d�$X�6D���)�l	��
�V�-�2R�(�c�B0W��+:+�X�B���s6���<:��u��rש�k���8껈r���������HӘR��v�      b   =   x�5�� !ѳ]�
��6A�$nO��P|s=�_�F�J8;��s�,\1r������      X      x������ � �      ^   �   x���A
�0@ѵ9�@�����Eq����J ̔1�<�K/�
.]x|[X�X����o��x��0pt��0��ŏ�i��K8�JZF�%������4�A}�s��S*��):K���4�P�F��1Sua"�[%�|�C=Ƙ/��H�      V   U   x�KL����T1JR14P�2)��r�p�(�qvN7-7�2K�s��L��1p��/�*�*�4���O��/�*-w��44�,����� ��"     