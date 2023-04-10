CREATE DATABASE sai
Go

Use [sai]
Go

If Not Exists(Select * From SysObjects Where Name = 'tb_Grupo')
	Begin
		Create Table tb_Grupo(
			 cd_Grupo		Int				Not Null
			,ds_Grupo		Varchar(50)		Not Null

			,Constraint [PK_tb_Grupo] Primary Key Clustered
			(cd_Grupo))
	End
Go

If Not Exists(Select * From SysObjects Where Name = 'tb_Projetos')
	Begin
		Create Table tb_Usuario(
			 cd_User		Int				Not Null
			,ds_User		Varchar(200)	Not Null
			,ds_Senha		Varchar(10)		Not	Null
			,ds_Email		Varchar(100)	Not Null
			,cd_Grupo		Int				Not Null

			,Constraint [PK_tb_Usuario] Primary Key Clustered
			(cd_User Asc)

			,Constraint [FK_tb_Grupo_tb_Usuario] Foreign Key (cd_Grupo)
				References tb_Grupo (cd_Grupo))
	End
GO

If Not Exists(Select * From SysObjects Where Name = 'tb_Projetos')
	Begin
		Create Table tb_Cliente(
			 cd_Cliente					Int				Not Null
			,ds_Nome					Varchar(200)	Not Null
			,ds_ClassificacaoCliente	Varchar(70)		Not Null
			,ds_Email					Varchar(100)	Not Null
			,ds_Telefone				Varchar(11)		Not Null

			,Constraint [PK_tb_Cliente] Primary Key Clustered
			(cd_Cliente Asc))
	End
Go

If Not Exists(Select * From SysObjects Where Name = 'tb_Projetos')
	Begin
		Create Table tb_Projetos(
			 cd_Cliente		Int				Not Null
			,cd_Projeto		Int				Not Null
			,ds_Projeto		Varchar(100)	Not Null
			,dt_Requisicao	DateTime		Not Null
			,ds_Status		Varchar(50)		Not Null

			,Constraint [FK_tb_Cliente_tb_Projetos] Foreign Key (cd_Cliente)
				References tb_Cliente (cd_Cliente)
	
			,Constraint [PK_tb_Projetos] Primary Key Clustered
			(cd_Cliente, cd_Projeto Asc))
	End
Go

If Not Exists(Select * From SysObjects Where Name = 'tb_Etapas')
	Begin
		Create Table tb_Etapas(
			 cd_Etapa		Int				Not Null
			,cd_Cliente		Int				Not Null
			,cd_Projeto		Int				Not Null
			,ds_Etapa		Varchar(100)	Not Null
			,ds_Status		Varchar(50)		Not Null

			,Constraint [PK_tb_Etapas] Primary Key Clustered
			(cd_Etapa, cd_Cliente, cd_Projeto)


			,Constraint [FK_tb_Projetos_tb_Etapas] Foreign Key (cd_Cliente, cd_Projeto)
				References tb_Projetos (cd_Cliente, cd_Projeto))
	End
Go

If Not Exists(Select * From SysObjects Where Name = 'tb_Componentes')
	Begin
		Create Table tb_Componentes(
			 cd_Componente	    Int				 Not Null
			,cd_PN				Int				 Not Null
			,ds_Nome		    Varchar(200)	 Not Null
			,ds_Modelo		    Varchar(100)	 Not Null
			,ds_Fabricante	    Varchar(100)	 Not Null
			,vl_Preco		    Numeric(16,2)	 Not Null
			,ds_Dimensao	    Varchar(100)	 Not Null
			,ds_TipoDesenho	    Varchar(50)	 	 Not Null
			,ds_Lpp				Varchar(50)	 	 Not Null
			,nr_Padronizacao    Varchar(100)	 Not Null
			,ds_Imagem			Varchar(1000)    Not Null

			,Constraint [PK_tb_Componentes] Primary Key Clustered
			(cd_Componente, cd_PN Asc))
	End
Go

If Not Exists(Select * From SysObjects Where Name = 'tb_Input')
	Begin
		Create Table tb_Input(
			 ds_Informacoes	    Varchar(200)	Not Null
			,cd_Etapa		    Int				Not Null
			,cd_Cliente			Int				Not Null
			,cd_Projeto			Int				Not Null
			,ds_Responsaveis    Varchar(200)	Not Null
			,dt_Inicio		    DateTime		Not Null
			,dt_Termino	      	DateTime		Not Null
			,Anexos				Varchar(200)	Not Null

			,Constraint [FK_tb_Etapas_tb_Input] Foreign Key	(cd_Etapa, cd_Cliente, cd_Projeto)
				References tb_Etapas (cd_Etapa, cd_Cliente, cd_Projeto))
	End
Go