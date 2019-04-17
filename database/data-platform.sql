PGDMP     .    5                w           alstom-data-platform    11.2    11.2 H    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    16394    alstom-data-platform    DATABASE     t   CREATE DATABASE "alstom-data-platform" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
 &   DROP DATABASE "alstom-data-platform";
             postgres    false            �            1259    16395    clients    TABLE     W  CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    trains integer,
    email character varying(255) DEFAULT NULL::character varying,
    filename character varying(255) DEFAULT NULL::character varying,
    updated_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone
);
    DROP TABLE public.clients;
       public         postgres    false            �            1259    16404    clients_country    TABLE     j   CREATE TABLE public.clients_country (
    clients_id integer NOT NULL,
    country_id integer NOT NULL
);
 #   DROP TABLE public.clients_country;
       public         postgres    false            �            1259    16407    clients_id_seq    SEQUENCE     w   CREATE SEQUENCE public.clients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public       postgres    false            �            1259    16409    clients_projects    TABLE     l   CREATE TABLE public.clients_projects (
    clients_id integer NOT NULL,
    projects_id integer NOT NULL
);
 $   DROP TABLE public.clients_projects;
       public         postgres    false            �            1259    16412    country    TABLE     +  CREATE TABLE public.country (
    id integer NOT NULL,
    iso character varying(2) NOT NULL,
    name character varying(80) NOT NULL,
    nicename character varying(80) NOT NULL,
    iso3 character varying(3) DEFAULT NULL::character varying,
    numcode smallint,
    phonecode integer NOT NULL
);
    DROP TABLE public.country;
       public         postgres    false            �            1259    16416    country_id_seq    SEQUENCE     w   CREATE SEQUENCE public.country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.country_id_seq;
       public       postgres    false            �            1259    16418 	   engineers    TABLE     P  CREATE TABLE public.engineers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    num_badge integer NOT NULL,
    filename character varying(255) DEFAULT NULL::character varying,
    updated_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone
);
    DROP TABLE public.engineers;
       public         postgres    false            �            1259    16426    engineers_id_seq    SEQUENCE     y   CREATE SEQUENCE public.engineers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.engineers_id_seq;
       public       postgres    false            �            1259    16428    engineers_projects    TABLE     p   CREATE TABLE public.engineers_projects (
    engineers_id integer NOT NULL,
    projects_id integer NOT NULL
);
 &   DROP TABLE public.engineers_projects;
       public         postgres    false            �            1259    16431    migration_versions    TABLE     �   CREATE TABLE public.migration_versions (
    version character varying(14) NOT NULL,
    executed_at timestamp(0) without time zone NOT NULL
);
 &   DROP TABLE public.migration_versions;
       public         postgres    false            �           0    0 %   COLUMN migration_versions.executed_at    COMMENT     [   COMMENT ON COLUMN public.migration_versions.executed_at IS '(DC2Type:datetime_immutable)';
            public       postgres    false    205            �            1259    16434    project_search    TABLE     �   CREATE TABLE public.project_search (
    id integer NOT NULL,
    name_project character varying(255) DEFAULT NULL::character varying
);
 "   DROP TABLE public.project_search;
       public         postgres    false            �            1259    16438    project_search_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.project_search_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.project_search_id_seq;
       public       postgres    false            �            1259    16440    projects    TABLE     4  CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    number_trains integer,
    available boolean,
    filename character varying(255) DEFAULT NULL::character varying,
    updated_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone
);
    DROP TABLE public.projects;
       public         postgres    false            �            1259    16448    projects_id_seq    SEQUENCE     x   CREATE SEQUENCE public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public       postgres    false            �            1259    16450    trains    TABLE     {   CREATE TABLE public.trains (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    projects_id integer
);
    DROP TABLE public.trains;
       public         postgres    false            �            1259    16453    trains_id_seq    SEQUENCE     v   CREATE SEQUENCE public.trains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.trains_id_seq;
       public       postgres    false            �            1259    16455    trains_search    TABLE     �   CREATE TABLE public.trains_search (
    id integer NOT NULL,
    name_train character varying(255) DEFAULT NULL::character varying
);
 !   DROP TABLE public.trains_search;
       public         postgres    false            �            1259    16459    trains_search_id_seq    SEQUENCE     }   CREATE SEQUENCE public.trains_search_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.trains_search_id_seq;
       public       postgres    false            �            1259    16560    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(180) NOT NULL,
    roles json NOT NULL,
    password character varying(255) NOT NULL
);
    DROP TABLE public."user";
       public         postgres    false            �            1259    16558    user_id_seq    SEQUENCE     t   CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public       postgres    false            �          0    16395    clients 
   TABLE DATA               P   COPY public.clients (id, name, trains, email, filename, updated_at) FROM stdin;
    public       postgres    false    196   >Q       �          0    16404    clients_country 
   TABLE DATA               A   COPY public.clients_country (clients_id, country_id) FROM stdin;
    public       postgres    false    197   
R       �          0    16409    clients_projects 
   TABLE DATA               C   COPY public.clients_projects (clients_id, projects_id) FROM stdin;
    public       postgres    false    199   SR       �          0    16412    country 
   TABLE DATA               T   COPY public.country (id, iso, name, nicename, iso3, numcode, phonecode) FROM stdin;
    public       postgres    false    200   �R       �          0    16418 	   engineers 
   TABLE DATA               W   COPY public.engineers (id, name, surname, num_badge, filename, updated_at) FROM stdin;
    public       postgres    false    202   �i       �          0    16428    engineers_projects 
   TABLE DATA               G   COPY public.engineers_projects (engineers_id, projects_id) FROM stdin;
    public       postgres    false    204   j       �          0    16431    migration_versions 
   TABLE DATA               B   COPY public.migration_versions (version, executed_at) FROM stdin;
    public       postgres    false    205   9j       �          0    16434    project_search 
   TABLE DATA               :   COPY public.project_search (id, name_project) FROM stdin;
    public       postgres    false    206   �k       �          0    16440    projects 
   TABLE DATA               \   COPY public.projects (id, name, number_trains, available, filename, updated_at) FROM stdin;
    public       postgres    false    208   �k       �          0    16450    trains 
   TABLE DATA               7   COPY public.trains (id, name, projects_id) FROM stdin;
    public       postgres    false    210   jl       �          0    16455    trains_search 
   TABLE DATA               7   COPY public.trains_search (id, name_train) FROM stdin;
    public       postgres    false    212   �l       �          0    16560    user 
   TABLE DATA               <   COPY public."user" (id, email, roles, password) FROM stdin;
    public       postgres    false    215   �l       �           0    0    clients_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.clients_id_seq', 18, true);
            public       postgres    false    198            �           0    0    country_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.country_id_seq', 1, false);
            public       postgres    false    201            �           0    0    engineers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.engineers_id_seq', 10, true);
            public       postgres    false    203            �           0    0    project_search_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.project_search_id_seq', 1, false);
            public       postgres    false    207            �           0    0    projects_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.projects_id_seq', 16, true);
            public       postgres    false    209            �           0    0    trains_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.trains_id_seq', 17, true);
            public       postgres    false    211            �           0    0    trains_search_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.trains_search_id_seq', 1, false);
            public       postgres    false    213            �           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 1, false);
            public       postgres    false    214                       2606    16462 $   clients_country clients_country_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.clients_country
    ADD CONSTRAINT clients_country_pkey PRIMARY KEY (clients_id, country_id);
 N   ALTER TABLE ONLY public.clients_country DROP CONSTRAINT clients_country_pkey;
       public         postgres    false    197    197                       2606    16464    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public         postgres    false    196            	           2606    16466 &   clients_projects clients_projects_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.clients_projects
    ADD CONSTRAINT clients_projects_pkey PRIMARY KEY (clients_id, projects_id);
 P   ALTER TABLE ONLY public.clients_projects DROP CONSTRAINT clients_projects_pkey;
       public         postgres    false    199    199                       2606    16468    country country_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.country DROP CONSTRAINT country_pkey;
       public         postgres    false    200                       2606    16470    engineers engineers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.engineers
    ADD CONSTRAINT engineers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.engineers DROP CONSTRAINT engineers_pkey;
       public         postgres    false    202                       2606    16472 *   engineers_projects engineers_projects_pkey 
   CONSTRAINT        ALTER TABLE ONLY public.engineers_projects
    ADD CONSTRAINT engineers_projects_pkey PRIMARY KEY (engineers_id, projects_id);
 T   ALTER TABLE ONLY public.engineers_projects DROP CONSTRAINT engineers_projects_pkey;
       public         postgres    false    204    204                       2606    16474 *   migration_versions migration_versions_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.migration_versions
    ADD CONSTRAINT migration_versions_pkey PRIMARY KEY (version);
 T   ALTER TABLE ONLY public.migration_versions DROP CONSTRAINT migration_versions_pkey;
       public         postgres    false    205                       2606    16476 "   project_search project_search_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.project_search
    ADD CONSTRAINT project_search_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.project_search DROP CONSTRAINT project_search_pkey;
       public         postgres    false    206                       2606    16478    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public         postgres    false    208                       2606    16480    trains trains_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.trains
    ADD CONSTRAINT trains_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.trains DROP CONSTRAINT trains_pkey;
       public         postgres    false    210                       2606    16482     trains_search trains_search_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.trains_search
    ADD CONSTRAINT trains_search_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.trains_search DROP CONSTRAINT trains_search_pkey;
       public         postgres    false    212            !           2606    16567    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public         postgres    false    215                       1259    16483    idx_548d5bbd1ede0f55    INDEX     N   CREATE INDEX idx_548d5bbd1ede0f55 ON public.trains USING btree (projects_id);
 (   DROP INDEX public.idx_548d5bbd1ede0f55;
       public         postgres    false    210                       1259    16484    idx_6d186969ab014612    INDEX     V   CREATE INDEX idx_6d186969ab014612 ON public.clients_country USING btree (clients_id);
 (   DROP INDEX public.idx_6d186969ab014612;
       public         postgres    false    197                       1259    16485    idx_6d186969f92f3e70    INDEX     V   CREATE INDEX idx_6d186969f92f3e70 ON public.clients_country USING btree (country_id);
 (   DROP INDEX public.idx_6d186969f92f3e70;
       public         postgres    false    197                       1259    16486    idx_6d1e71231ede0f55    INDEX     Z   CREATE INDEX idx_6d1e71231ede0f55 ON public.engineers_projects USING btree (projects_id);
 (   DROP INDEX public.idx_6d1e71231ede0f55;
       public         postgres    false    204                       1259    16487    idx_6d1e71232d33a762    INDEX     [   CREATE INDEX idx_6d1e71232d33a762 ON public.engineers_projects USING btree (engineers_id);
 (   DROP INDEX public.idx_6d1e71232d33a762;
       public         postgres    false    204            
           1259    16488    idx_cc12c5951ede0f55    INDEX     X   CREATE INDEX idx_cc12c5951ede0f55 ON public.clients_projects USING btree (projects_id);
 (   DROP INDEX public.idx_cc12c5951ede0f55;
       public         postgres    false    199                       1259    16489    idx_cc12c595ab014612    INDEX     W   CREATE INDEX idx_cc12c595ab014612 ON public.clients_projects USING btree (clients_id);
 (   DROP INDEX public.idx_cc12c595ab014612;
       public         postgres    false    199                       1259    16568    uniq_8d93d649e7927c74    INDEX     P   CREATE UNIQUE INDEX uniq_8d93d649e7927c74 ON public."user" USING btree (email);
 )   DROP INDEX public.uniq_8d93d649e7927c74;
       public         postgres    false    215            (           2606    16490    trains fk_548d5bbd1ede0f55    FK CONSTRAINT     �   ALTER TABLE ONLY public.trains
    ADD CONSTRAINT fk_548d5bbd1ede0f55 FOREIGN KEY (projects_id) REFERENCES public.projects(id);
 D   ALTER TABLE ONLY public.trains DROP CONSTRAINT fk_548d5bbd1ede0f55;
       public       postgres    false    208    210    3097            "           2606    16495 #   clients_country fk_6d186969ab014612    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients_country
    ADD CONSTRAINT fk_6d186969ab014612 FOREIGN KEY (clients_id) REFERENCES public.clients(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.clients_country DROP CONSTRAINT fk_6d186969ab014612;
       public       postgres    false    3075    197    196            #           2606    16500 #   clients_country fk_6d186969f92f3e70    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients_country
    ADD CONSTRAINT fk_6d186969f92f3e70 FOREIGN KEY (country_id) REFERENCES public.country(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.clients_country DROP CONSTRAINT fk_6d186969f92f3e70;
       public       postgres    false    197    3085    200            &           2606    16505 &   engineers_projects fk_6d1e71231ede0f55    FK CONSTRAINT     �   ALTER TABLE ONLY public.engineers_projects
    ADD CONSTRAINT fk_6d1e71231ede0f55 FOREIGN KEY (projects_id) REFERENCES public.projects(id) ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.engineers_projects DROP CONSTRAINT fk_6d1e71231ede0f55;
       public       postgres    false    3097    204    208            '           2606    16510 &   engineers_projects fk_6d1e71232d33a762    FK CONSTRAINT     �   ALTER TABLE ONLY public.engineers_projects
    ADD CONSTRAINT fk_6d1e71232d33a762 FOREIGN KEY (engineers_id) REFERENCES public.engineers(id) ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.engineers_projects DROP CONSTRAINT fk_6d1e71232d33a762;
       public       postgres    false    202    204    3087            $           2606    16515 $   clients_projects fk_cc12c5951ede0f55    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients_projects
    ADD CONSTRAINT fk_cc12c5951ede0f55 FOREIGN KEY (projects_id) REFERENCES public.projects(id) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.clients_projects DROP CONSTRAINT fk_cc12c5951ede0f55;
       public       postgres    false    3097    208    199            %           2606    16520 $   clients_projects fk_cc12c595ab014612    FK CONSTRAINT     �   ALTER TABLE ONLY public.clients_projects
    ADD CONSTRAINT fk_cc12c595ab014612 FOREIGN KEY (clients_id) REFERENCES public.clients(id) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.clients_projects DROP CONSTRAINT fk_cc12c595ab014612;
       public       postgres    false    196    3075    199            �   �   x��ϱ�0����@�][�t2qwё�!��R6<� 1��t���r���^9"	BB׻K�~_ֶ�C~#g�C�)� ���ES/3���1��绚�Olǝ/+�\����qT�0"4�El�"�]�U��7��u�_�oI�R�,Y$�sMl$�B#�5$�kH��G�"�c����k�      �   9   x��� !���0���"v����e907>ԸY�ʔa1�Pu��E/�ߞ��V�	�      �   4   x�34�4�2c#.C��2�� ,3a",A���4�� �f\1z\\\ �;
=      �      x�m��r�H��SO���D�L .�BFZ���m��i�����������ى��UUY�<�YE_��[ڑ�fv$���Oű:�����)ӡ1;�� ��>�APh],�F�P�{����ݏeC�|oK ���0�N��v쨗�a�3T�ű��5������4Fb�Ŏ�q�@w|���кnd8c�c�^h�c}�׋e`RLc"����t���lm<�aKcӰ��Mf'Nƞ�:����ȿ#-7Ɣ9���r��⽙���yK[=^�^q|�͊�����'K綌���	�sA�<�9�&Á�L�߇�C�eh�\�MB�9"p|KC>��������CL'F(vNI��t�����"Oe8�q������y�h�31o�}����n2��[����+��T�{W�}�N��Xf���"�Y�T<'�-S1M�k����R$�)ESTG�1-�NXɒ���칛B[�Cyz��7�эX֍џ�l&�e{�R��f�d&���56P��Nfn g )Es�"H�ǆ��1�ӭ���J�X]��.�1�7����sF���%��b��o�2��;ң ��~�w��`j�a3&u�PaV6�*�Y��*�i2~$����jJ���Z�,�d����fL	�B�Շ�+B�.cKFS��L:��h�n�&{׋7�I�������,���c�U�j�/e�eXDMfq�n�v����P��-lq	l�@�oܬ私�լ�|-�=�t`�w��b��@fM�:hM&cQ���Q?��eϏ�>�;.37�9N�TS���S�?>T�z|_�7+������
����$�\�7W�v��̚˱�zs��8�2�d���XX�̓Yx����rx,T�g�pGFSc���$+8�[�){�4_�[oQ�j:m�F*^6��|��9��]�6��3�%�����VKq�ps^q�绚�ш��T,e�D�Pi�$�#�)��>�ȮP���y,(�=�Y�jDM�\��p*Ά���m�d�B�R�6e�P���Hn���!�v��B�މ2���&w�<��cgl�?4G��g!�	�ѳ�?N�u>|G�n�g��y�|���{�X�޺��a$����E;OŃdΜ>�3d��8}~�����]��zG4ŉ�Ť�t�������	AG��SC$������7s,;��8���r��������D{��}��u�d`�H)�q8SIև��I�"}�	as����8�u���Q� �OAy���'���7p��5x��~�eK�7w��Il"�;�{�B��џz秲7/���� ��W��]����nvd��%^}8u�����&�ځ8	-���J�{/�x�$�����#��C������Otg�Rk_�a�G��22����Ĝ�)��=4��S��R�)�4Gc_��C�;��n���y}Q?N�n�4�!�=�u��{y��A-qმ���cd�|%s7
����h��<ZAa	�?�������2_�Uw��\i�Ġ�^|�<�H�4�����h��b�:�C�N��|��?T4UhS�E\���q�/��F됨�g���e���}|}9�X�rBBH�7 ?�n����&6��0�H���~�m������"��?��[a�ޥ:��x�g�|(��eN<w����
�6�!8�'��Y���=�kE-ԡ}Q�e��ҏ�Jr~���ɖ��a2�Le����Tkߔ��Kȱ�鯲(_T��t�>���8����q�3]�̔��,��.ߍ`� 	��eL��������__	o05������:���:���GF��bG�+��8ޗZ�Dę��C�4��
�5�.���j�^������d�N���]����u}x=�'ض��f�c��Ǥ�0��G����mx�Z?�͏8[����>��gSfD&��#,���
���ҺD�h�����d*�K�O	ʺyT
&#��td���J��vP4ĢW��q`N�/�R4�`���1K�hi �@<�� ��Uw$���!E0��ư�B���E^S���Kj̧Ymw'N���%�l#�+U��i���̡ ɛ�k,���Z�8_�&[���k 2�6eA��+]��|��i23���˴3s�p[)��3P�f� ���a�Y$���q�~CMj�1�o{��m惎�+�o�
dta�L�m
42p��/ߵ\��v��c6�3>.3Y�`7Y@4�>j��cjL��Y�v�f�-�y����ʲ,�7mAix�P�����-��)[�(z/u��/���N��h�`ͯ�D�{iYҫ�/�TgZΰ�W�g�Sd{#7,�h�'�$���pi�I��zh*;a�X�+��z+�(�co�����"�6Ld�S"��N��#��U�P�؎��%~*��z�ߗ�q~�PU�����Z�+-��ozƂ�T�ϵ%����l�"��1��H:��ѧ�����@|�ͧ���?c��,��u����|����3}X%�n� �4]�\��0у��a�|?Mlr%���Ak�p���6G�g;؉.��M��Q��o�r�-Y�F�[�D�ԡ��,����Dn״�A���������2˒ۘ�̵�n��(g��i˧�������j�^U���ŗ����V&��ܘ�{�R��-���Z�7���~���ʧ$�-�U�Tw(���H,@��L�ֲ����>¶���_�O�Y��Oqۺ�_�N?	k.19��������a��W�N��%V[Y�[lWV�o/��tL�#F���v���wLzm_�wL��Np�zı��;�q�������4��T���Nؙ��Aq���BÞp�}���̎�@AyW�A��	x��E*A
Ig��S}~�ibE*c��i�����p
����) [5���0ˠ/�)$����س�������Ğ�w=U�'��U'�1��p�	�� @37J3;*��<��eu�>���g0� �)[��%YP��.�5Y��b�zs��q�AN��%��O��K��K��9"��H�XBہ�aq_��M�昺�X6�sc]~�����.�b���'�b��A�Z�d,ꆴ���<����?�[�����A��DB���g�!9$L>�{br8�@�0\ņ�íh����o>�+�������`��PI^���"@�Az�Fi��D�C���7b�UA��/a�D�:��F�@3���%�̏\L�Q��K��ti�{(���T�+$oi�D�$u��ʀ��sW��@��\J���
�tv���L�jAX\�`���n�R�nhB�WB?O�t9PH��o�'��N���LW}�����ք�����H���̆���Zk���t�v(���@�zw�b��i��}��%�ˇ/��{R�X�!���VDDst3�Ǜ����><�_��BЕ9U�G:&�sٺ_���OS������x�^l���fH7��`��S%�R�/� ��	�[��H47 {i�#Г�i�6���h+��9,2������V��wE��p�=�z��C��Bx�?��!�Ym@ou��f�VD W��@S�Q_=�nȒ(�)Or.ͅj��@z�kN%ZK��@��8PEz{w���W���Q�X���(�C
��Ҩ/���=������.�p���%+<����&r��9v�9F}�9š�!t�+4al鮆�[�k� C��eт�h)>@OϿ�M�D,�)/��A�i|���&�Hˆ*�$}��mh�ucU�� ��d��$H��3�$_2��~��,$��E�]�HT7և��V0۫��ϵ�]��mcd�;�v	W�����A�#KuQ]?h/�u����1ߊW��!�c�����5��7��P>ξ^��^u�4��K�BCK`ls<������`�/���8��o�:�nv���{�O=�#_��\�'un/j鿿��T��ܴ=Y�MA�������=6r��e�Ѵ�힪�5�Y/���:rMtֈs��O�xB�ˠVC�����#D��*�%�ck�Y�_t��P��T�K���5r��P���։� J�BP����[���:�US�b���'}�(��#$� �  �k��ǠM�z^g�$Y�a�kT��ٮ��c}��ML"��M�X��bY_��\�\M��nn����s�m�f���|��_= �=I�R��?%��X���Cb�=$cIbJ�F��~n�uLp �b"0N��U����r:��A���x4���Q�dK�L�^Z��� L%]Jj�Q�[����Eu<�����N�x��Y�1Wѕx�gY�f���!��F�����f�Q��:A�Zc���g���� w����˽�.G����N}����+-j�$n�Ҫ�8x7r]��e�ʪ�?p��qc�0�4Cټ-��#�Ho�Q���$���Ͷ���%�u:�\�C���NZ�#Sb��A��h��%�Z�y�v�$սw����9�t$8�������q/����V���J
�����pk��W/%�k��Ջ�s�XJ>�[��2��P�0����RD&�Ka����iy,U�k���F뭩8�Mfק,�: �L�������[�7�շ5��H
�ݝ�i�J������U����-8��א��*S���IU�E/(�4t��z�i��s�AL��d��������5*�q.ӡ�+�oVʄ��2`��F��u�&�D���o��&�h�)����$�G���M�o��'���h�  ���qؾ����L�F���Ȟ.��>�H{�w}��s!�E�8U/��^����kE��[�Y~؝�u��{Wޮ�{�V�?��O:�Z���} vS8
p!p�M�k��oS����3��(m�T�r.i��z��?��̡�MN�Fx	ݨ�";3!�����tb�k@z���
Iwou�Z��L��;���SݶV�Z��-�e��G�{I���.?��Ϟ����*��d�-lq�L�wyԚL�N�3�X�������:�`]JI �C���(
)�<�=�N_NtY�{��L�z#24�e#�Jf�[�;Z'q��M�{fˊ���})�/��{z˶��F�n�n���2ͭ�Y�Wu�-J��c�Ve{���&�D!�$>� Yq�^�if~�4���d(��	�H���-)v����M+��A8$�A�)nq%���� �R����@8�̓,�b��ǚJ�$�m!��)يΕ��(���
��U �7���E�IG��t�C��c,Y&����N��x�?:�����t*��
]��&��,Օ�D2X
�4�ؚ͈�R���uz�Д��͗�Uk2�a��C@aۯ?�D��j��
��L�a �Ȝ����}%}3p�EU�����͘�A̢��jnĳaL	�]0��֠���5H�QZ4�?�h��XX��\�t\���J�J�ERjS/!1Ŧ�S�V�����4������>W����ഉ�`!Lg0o�6x�S�׶����~��������+}����w�.�lW��O$&.��{��`�j��i�ñnz��|xe�:�%�N��Zx�7���[K�rv*��2s����+��H�Xj�Jj�䲱����_/��B���pZI��q)���ز!�~���LC��[��z��n���#�Q�	S}��x�D�c٧�� !^��4ڻ_~0�ি�i�0�S俧��������J�ץ���e8��B�v��b/r�Ȗmq8T�F/.��m,�R۵�=cq��U��ϖ�lՁ4��'�_%M������[���ɮ���O9��"���P��#پ{$ۇHEQ�X�9��V�~8�gĄ}�|W�}+iDyۋ����������      �   l   x�3�t�K��KM-2��K��sS9��M8c���˂3�B�$���L�M�
L�F(��B���LJ,K,I,҅I��sZ���)�X�Z�p��qqq �Y*�      �   (   x�3�4�2�4�2�4� bS0� bK 64 �\1z\\\ w�n      �   Q  x�}�In�0�u}
_ ��$J<K��RI5yQ��y�D~�A�ML����yq��B,�\�G�,�N��Z�/�0��p�B�F�DD�b"�ALXD�E����0��b�b6�N� � ZD�r;���  Z�ި�0�<#dvT�.��E�� .Nu��;�|�C4�+2b��&d���H�z
ʦg�篲����,;ɐ�$����ι"9ۈ�=��-RQ$���o�>��}n����}I�zӹ��9V»�:����.;ɬ�3I��gdG��Q�틤1=ʚ�4��B��K�v��O�e��M7Zs���g���}]�/hŴ      �      x������ � �      �   �   x���M
�@�u�^@��?��ܗ�@�NuĪ�A���E�@�m��H�_F��(���*��(j���(|9sm8����,e��\�����7ջ�\K7���b7��{ڭ?hp�@�jmG�[7��'�ڃ�X�:�QG����H��CAV(L�����m��}�f�      �   4   x���)J��S0�4�24�r�@(Ǆӈ���1�4�24�r̀21z\\\ >_�      �      x������ � �      �      x������ � �     