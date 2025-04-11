# XMUT Blog

<p align="center">
  <img src="main/resources/static/images/logo.png" alt="XMUT Blog Logo" width="200">
</p>

## 作者 | Authors
- Junjie Chen
- Qixiang Zhang

## 项目介绍 | Project Introduction

XMUT Blog 是一个基于 Spring Boot 开发的博客论坛系统，提供了用户注册登录、文章发布、评论、收藏、关注等功能。系统使用 Thymeleaf 作为模板引擎，MySQL 作为数据库，Redis 用于缓存，并集成了邮件发送、文件上传等功能。

XMUT Blog is a blog forum system developed based on Spring Boot, providing functions such as user registration and login, article publishing, commenting, collection, following, and more. The system uses Thymeleaf as the template engine, MySQL as the database, Redis for caching, and integrates email sending, file uploading, and other features.

## 技术栈 | Technology Stack

### 后端 | Backend
- Spring Boot 2.2.6
- Spring Security
- MyBatis
- Redis
- MySQL
- Thymeleaf
- WebSocket

### 前端 | Frontend
- Bootstrap
- jQuery
- Layui
- Swiper

## 功能特性 | Features

### 用户功能 | User Features
- 用户注册与登录 | User registration and login
- 邮箱验证 | Email verification
- 个人资料管理 | Profile management
- 关注与粉丝 | Following and followers

### 博客功能 | Blog Features
- 文章发布与编辑 | Article publishing and editing
- 文章分类 | Article categorization
- 文章收藏 | Article collection
- 文章阅读统计 | Article reading statistics
- 文章评论 | Article commenting

### 社交功能 | Social Features
- 用户关注 | User following
- 即时消息 | Instant messaging
- 评论互动 | Comment interaction

### 管理功能 | Admin Features
- 用户管理 | User management
- 内容审核 | Content moderation
- 系统设置 | System settings

## 项目结构 | Project Structure

```
xmut_Blog/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── xmut/
│   │           └── forum/
│   │               ├── config/           # 配置类 | Configuration classes
│   │               ├── constants/        # 常量定义 | Constants definitions
│   │               ├── controller/       # 控制器 | Controllers
│   │               ├── exception/        # 异常处理 | Exception handling
│   │               ├── mapper/           # 数据访问 | Data access
│   │               ├── pojo/             # 实体类 | Entity classes
│   │               ├── result/           # 结果封装 | Result wrappers
│   │               ├── service/          # 服务层 | Service layer
│   │               ├── util/             # 工具类 | Utility classes
│   │               ├── verify/           # 验证类 | Verification classes
│   │               ├── webserver/        # Web服务 | Web services
│   │               └── XMUTForumApplication.java  # 启动类 | Main application
│   │
│   └── resources/
│       ├── mapper/           # MyBatis映射文件 | MyBatis mapping files
│       ├── mybatis/          # MyBatis配置 | MyBatis configuration
│       ├── static/           # 静态资源 | Static resources
│       ├── templates/        # 模板文件 | Template files
│       ├── application.properties  # 应用配置 | Application configuration
│       └── logback.xml       # 日志配置 | Logging configuration
│
└── pom.xml                   # Maven依赖配置 | Maven dependencies
```

## 安装与运行 | Installation and Running

### 环境要求 | Requirements
- JDK 1.8+
- Maven 3.0+
- MySQL 5.7+
- Redis 5.0+

### 配置数据库 | Database Configuration
1. 创建数据库 | Create database:
```sql
CREATE DATABASE _forum DEFAULT CHARACTER SET utf8mb4;
```

2. 修改 `application.properties` 中的数据库配置 | Modify database configuration in `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/_forum?serverTimezone=GMT&useUnicode=true&characterEncoding=UTF-8
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 配置 Redis | Redis Configuration
修改 `application.properties` 中的 Redis 配置 | Modify Redis configuration in `application.properties`:
```properties
spring.redis.host=localhost
spring.redis.port=6379
```

### 配置邮件服务 | Email Service Configuration
修改 `application.properties` 中的邮件配置 | Modify email configuration in `application.properties`:
```properties
spring.mail.host=your_smtp_server
spring.mail.username=your_email
spring.mail.password=your_password
```

### 构建与运行 | Build and Run
```bash
# 克隆项目 | Clone the project
git clone https://github.com/your-username/xmut_Blog.git
cd xmut_Blog

# 构建项目 | Build the project
mvn clean package

# 运行项目 | Run the project
java -jar target/forum-1.0.jar
```

## 访问地址 | Access URL
启动成功后，访问 | After successful startup, visit:
```
http://localhost:22451
```

## 联系方式 | Contact Information
如有任何问题或建议，请联系 | For any questions or suggestions, please contact:
- Email: cliffcedar0@gmail.com

## 许可证 | License
本项目采用 MIT 许可证 | This project is licensed under the MIT License.
